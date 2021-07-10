import { DataTypes } from "sequelize";
import { ScoreModelStatic } from "../interfaces/score.interface";

export { model };

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    gameId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    points: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    order: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  };

  const options = {
    timestamps: true,
  };

  return <ScoreModelStatic>sequelize.define("Score", attributes, options);
}
