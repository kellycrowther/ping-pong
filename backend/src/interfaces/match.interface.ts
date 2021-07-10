import { Model, BuildOptions } from "sequelize";
import { ResultsAttributes } from "./result.interface";

export interface MatchAttributes extends Model {
  id: string;
  results: Array<ResultsAttributes>;
}

export type MatchModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): MatchAttributes;
};
