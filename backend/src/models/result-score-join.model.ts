import { DataTypes } from "sequelize";
import { ResultScoreModelStatic } from "../interfaces/result-score-join.interface";

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

  return <ResultScoreModelStatic>(
    sequelize.define("ResultScoreJoin", attributes, options)
  );
}
