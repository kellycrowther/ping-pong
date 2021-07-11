import { Sequelize } from "sequelize";
import { PlayerModelStatic } from "../interfaces/player.interface";
import { MatchModelStatic } from "../interfaces/match.interface";
import { model as playerModel } from "../models/player.model";
import { model as matchModel } from "../models/match.model";
import { model as resultModel } from "../models/result.model";
import { model as scoreModel } from "../models/score.model";
import { ResultsModelStatic } from "../interfaces/result.interface";
import { ScoreModelStatic } from "../interfaces/score.interface";

export { db };

interface IDatabase {
  Player: PlayerModelStatic;
  Match: MatchModelStatic;
  Result: ResultsModelStatic;
  Score: ScoreModelStatic;
  sequelize: Sequelize;
}

let db: IDatabase = <IDatabase>{};

initialize();

async function initialize() {
  // connect to db
  const sequelize = new Sequelize("sqlite://db-ping-pong.sqlite", "", null, {
    sync: {
      force: true,
    },
    dialect: "sqlite",
  });

  db = makeDb(sequelize);

  // sync all models with database
  await sequelize.sync({ alter: true });
}

function makeDb(sequelize): IDatabase {
  let db: IDatabase = <IDatabase>{};
  // init models and add them to the exported db object
  const Player = playerModel(sequelize);
  const Match = matchModel(sequelize);
  const Result = resultModel(sequelize);
  const Score = scoreModel(sequelize);

  // define relationships
  Match.hasMany(Result, {
    foreignKey: "matchId",
    as: "results",
  });
  Result.belongsTo(Match, { foreignKey: "matchId" });

  Result.hasMany(Score, {
    foreignKey: "resultId",
    as: "scores",
  });
  Score.belongsTo(Result, { foreignKey: "resultId" });

  Player.hasMany(Result, { foreignKey: "playerId" });
  Result.belongsTo(Player, { foreignKey: "playerId", as: "player" });

  // add to db
  db.sequelize = sequelize;
  db.Player = Player;
  db.Match = Match;
  db.Result = Result;
  db.Score = Score;
  return db;
}
