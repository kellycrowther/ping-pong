import { Model, BuildOptions } from "sequelize";

export interface PlayerAttributes extends Model {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export type PlayerModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PlayerAttributes;
};
