import { Model, BuildOptions } from "sequelize";
import { ScoreAttributes } from "./score.interface";

export interface ResultsAttributes extends Model {
  id: string;
  player: string;
  gamesWon: number;
  scores: Array<ScoreAttributes>;
}

export type ResultsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ResultsAttributes;
};
