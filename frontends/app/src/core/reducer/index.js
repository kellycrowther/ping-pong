import { combineReducers } from "redux";
import constants from "./constants.reducer";
import playerState from "./player.reducer";
import matchState from "./match.reducer";

const rootReducer = () =>
  combineReducers({
    constants,
    playerState,
    matchState,
  });

export default rootReducer;
