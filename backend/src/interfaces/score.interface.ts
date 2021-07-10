import { Model, BuildOptions } from "sequelize";

export interface ScoreAttributes extends Model {
  id: string;
  gameId: string;
  points: number;
  order: number;
}

export type ScoreModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ScoreAttributes;
};
