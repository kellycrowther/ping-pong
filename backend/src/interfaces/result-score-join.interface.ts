import { Model, BuildOptions } from "sequelize";
import { ScoreAttributes } from "./score.interface";

export interface ResultScoreAttributes extends Model {
  id: string;
  scores: Array<ScoreAttributes>;
}

export type ResultScoreModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ResultScoreAttributes;
};
