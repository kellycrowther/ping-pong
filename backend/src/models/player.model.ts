import { DataTypes } from "sequelize";
import { PlayerModelStatic } from "../interfaces/player.interface";

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
      allowNull: false,
    },
  };

  const options = {
    timestamps: true,
  };

  return <PlayerModelStatic>sequelize.define("Player", attributes, options);
}
