import { combineReducers } from "redux";
import constants from "./constants.reducer";
import playerState from "./player.reducer";

const rootReducer = () =>
  combineReducers({
    constants,
    playerState,
  });

export default rootReducer;
