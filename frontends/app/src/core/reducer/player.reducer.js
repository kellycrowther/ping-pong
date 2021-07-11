import { PlayerActions } from "../actions";

const INITIAL_STATE = {
  loading: {
    listPlayers: false,
    createPlayer: false,
    rankedPlayers: false,
  },
  loaded: {
    listPlayers: false,
    createPlayer: false,
    rankedPlayers: false,
  },
  error: {
    listPlayers: null,
    createPlayer: null,
    rankedPlayers: false,
  },
  players: [],
  rankedPlayers: [],
};

const playerState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayerActions.LIST_PLAYERS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          listPlayers: true,
        },
        loaded: {
          ...state.loaded,
          listPlayers: false,
        },
      };
    }

    case PlayerActions.LIST_PLAYERS_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        loading: {
          ...state.loading,
          listPlayers: false,
        },
        loaded: {
          ...state.loaded,
          listPlayers: true,
        },
        players: [...payload],
      };
    }

    case PlayerActions.LIST_PLAYERS_FAIL: {
      const { payload } = action;
      return {
        ...state,
        loading: {
          ...state.loading,
          listPlayers: false,
        },
        loaded: {
          ...state.loaded,
          listPlayers: false,
        },
        error: {
          ...state.error,
          listPlayers: { ...payload },
        },
      };
    }

    case PlayerActions.CREATE_PLAYER: {
      return {
        ...state,
        loading: {
          ...state.loading,
          createPlayer: true,
        },
        loaded: {
          ...state.loaded,
          createPlayer: false,
        },
      };
    }

    case PlayerActions.CREATE_PLAYER_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        loading: {
          ...state.loading,
          createPlayer: false,
        },
        loaded: {
          ...state.loaded,
          createPlayer: true,
        },
        players: [...state.players, payload],
      };
    }

    case PlayerActions.CREATE_PLAYER_FAIL: {
      const { payload } = action;
      return {
        ...state,
        loading: {
          ...state.loading,
          createPlayer: false,
        },
        loaded: {
          ...state.loaded,
          createPlayer: false,
        },
        error: {
          ...state.error,
          createPlayer: { ...payload },
        },
      };
    }

    case PlayerActions.LIST_RANKED_PLAYERS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          rankedPlayers: true,
        },
        loaded: {
          ...state.loaded,
          rankedPlayers: false,
        },
      };
    }

    case PlayerActions.LIST_RANKED_PLAYERS_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        loading: {
          ...state.loading,
          rankedPlayers: false,
        },
        loaded: {
          ...state.loaded,
          rankedPlayers: true,
        },
        rankedPlayers: [...payload],
      };
    }

    case PlayerActions.LIST_RANKED_PLAYERS_FAIL: {
      const { payload } = action;
      return {
        ...state,
        loading: {
          ...state.loading,
          rankedPlayers: false,
        },
        loaded: {
          ...state.loaded,
          rankedPlayers: false,
        },
        error: {
          ...state.error,
          rankedPlayers: { ...payload },
        },
      };
    }

    default:
      return state;
  }
};

export default playerState;
