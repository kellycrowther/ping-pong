import { DataTypes } from "sequelize";
import { MatchResultModelStatic } from "../interfaces/match-result-join.interface";

export { model };

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  };

  const options = {
    timestamps: true,
  };

  return <MatchResultModelStatic>(
    sequelize.define("MatchResultJoin", attributes, options)
  );
}
