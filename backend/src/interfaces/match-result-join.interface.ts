import { Model, BuildOptions } from "sequelize";
import { ResultsAttributes } from "./result.interface";

export interface MatchResultAttributes extends Model {
  id: string;
  results: Array<ResultsAttributes>;
}

export type MatchResultModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): MatchResultAttributes;
};
