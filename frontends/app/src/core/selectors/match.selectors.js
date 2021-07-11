import { createSelector } from "reselect";

export const getMatchState = (state) => state.matchState;

export const getMatchSelector = createSelector(
  [getMatchState],
  (matchState) => {
    return matchState.matches;
  }
);

export const getMatchLoading = createSelector([getMatchState], (matchState) => {
  return matchState.loading;
});

export const getCreateMatchLoading = createSelector(
  [getMatchLoading],
  (loading) => {
    return loading.createMatch;
  }
);

export const getMatchesSelector = createSelector(
  [getMatchState],
  (matchState) => {
    return matchState.matches;
  }
);
