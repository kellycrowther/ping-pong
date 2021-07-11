import { combineEpics } from "redux-observable";

// Epics
import {
  listPlayersEpic,
  createPlayerEpic,
  createPlayerSuccessEpic,
  createPlayerFailEpic,
} from "./player.epics";

import {
  createMatchEpic,
  createMatchSuccessEpic,
  createMatchFailEpic,
  listMatchesEpic,
} from "./match.epics";

// Root epic
export default combineEpics(
  listPlayersEpic,
  createPlayerEpic,
  createPlayerSuccessEpic,
  createPlayerFailEpic,
  createMatchEpic,
  createMatchSuccessEpic,
  createMatchFailEpic,
  listMatchesEpic
);
