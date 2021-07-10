import { DataTypes } from "sequelize";
import { ResultsModelStatic } from "../interfaces/result.interface";

export { model };

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    gamesWon: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  };

  const options = {
    timestamps: true,
  };

  return <ResultsModelStatic>sequelize.define("Result", attributes, options);
}
