import { DataTypes } from "sequelize";
import { MatchModelStatic } from "../interfaces/match.interface";

export { model };

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  };

  const options = {
    timestamps: true,
  };

  return <MatchModelStatic>sequelize.define("Match", attributes, options);
}
