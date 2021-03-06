export const PlayerActions = {
  LIST_PLAYERS: "[Player] List Players",
  LIST_PLAYERS_SUCCESS: "[Player] List Players Success",
  LIST_PLAYERS_FAIL: "[Player] List Players Fail",

  CREATE_PLAYER: "[Player] Create Player",
  CREATE_PLAYER_SUCCESS: "[Player] Create Player Success",
  CREATE_PLAYER_FAIL: "[Player] Create Player Fail",

  LIST_RANKED_PLAYERS: "[Player] List Ranked Players",
  LIST_RANKED_PLAYERS_SUCCESS: "[Player] List Ranked Players Success",
  LIST_RANKED_PLAYERS_FAIL: "[Player] List Ranked Players Fail",
};

export const listPlayers = (payload) => ({
  type: PlayerActions.LIST_PLAYERS,
  payload,
});

export const listPlayerSuccess = (payload) => ({
  type: PlayerActions.LIST_PLAYERS_SUCCESS,
  payload,
});

export const listPlayerFail = (payload) => ({
  type: PlayerActions.LIST_PLAYERS_FAIL,
  payload,
});

export const createPlayer = (payload) => ({
  type: PlayerActions.CREATE_PLAYER,
  payload,
});

export const createPlayerSuccess = (payload) => ({
  type: PlayerActions.CREATE_PLAYER_SUCCESS,
  payload,
});

export const createPlayerFail = (payload) => ({
  type: PlayerActions.CREATE_PLAYER_FAIL,
  payload,
});

export const listRankedPlayers = (payload) => ({
  type: PlayerActions.LIST_RANKED_PLAYERS,
  payload,
});

export const listRankedPlayersSuccess = (payload) => ({
  type: PlayerActions.LIST_RANKED_PLAYERS_SUCCESS,
  payload,
});

export const listRankedPlayersFail = (payload) => ({
  type: PlayerActions.LIST_RANKED_PLAYERS_FAIL,
  payload,
});
