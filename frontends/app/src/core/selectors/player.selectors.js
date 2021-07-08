import { createSelector } from "reselect";

export const getPlayerState = (state) => state.playerState;

export const getPlayersSelector = createSelector(
  [getPlayerState],
  (playerState) => {
    return playerState.players;
  }
);

export const getPlayerLoading = createSelector(
  [getPlayerState],
  (playerState) => {
    return playerState.loading;
  }
);

export const getCreatePlayerLoading = createSelector(
  [getPlayerLoading],
  (loading) => {
    return loading.createPlayer;
  }
);
