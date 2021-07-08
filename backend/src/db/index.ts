import { Sequelize } from "sequelize";
import { PlayerModelStatic } from "../interfaces/player.interface";
import { model as playerModel } from "../models/player.model";

export { db };

interface IDatabase {
  Player: PlayerModelStatic;
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

  // add to db
  db.Player = Player;
  return db;
}
