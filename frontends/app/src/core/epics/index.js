import { combineEpics } from "redux-observable";

// Epics
import {
  listPlayersEpic,
  createPlayerEpic,
  createPlayerSuccessEpic,
  createPlayerFailEpic,
} from "./player.epics";

// Root epic
export default combineEpics(
  listPlayersEpic,
  createPlayerEpic,
  createPlayerSuccessEpic,
  createPlayerFailEpic
);
