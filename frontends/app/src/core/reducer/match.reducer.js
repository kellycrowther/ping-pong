import { MatchActions } from "../actions";

const INITIAL_STATE = {
  loading: {
    listMatches: false,
    createMatch: false,
  },
  loaded: {
    listMatches: false,
    createMatch: false,
  },
  error: {
    listMatches: null,
    createMatch: null,
  },
  matches: [],
};

const matchState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MatchActions.LIST_MATCHES: {
      return {
        ...state,
        loading: {
          ...state.loading,
          listMatches: true,
        },
        loaded: {
          ...state.loaded,
          listMatches: false,
        },
      };
    }

    case MatchActions.LIST_MATCHES_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        loading: {
          ...state.loading,
          listMatches: false,
        },
        loaded: {
          ...state.loaded,
          listMatches: true,
        },
        matches: [...payload],
      };
    }

    case MatchActions.LIST_MATCHES_FAIL: {
      const { payload } = action;
      return {
        ...state,
        loading: {
          ...state.loading,
          listMatches: false,
        },
        loaded: {
          ...state.loaded,
          listMatches: false,
        },
        error: {
          ...state.error,
          listMatches: { ...payload },
        },
      };
    }

    case MatchActions.CREATE_MATCH: {
      return {
        ...state,
        loading: {
          ...state.loading,
          createMatch: true,
        },
        loaded: {
          ...state.loaded,
          createMatch: false,
        },
      };
    }

    case MatchActions.CREATE_MATCH_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        loading: {
          ...state.loading,
          createMatch: false,
        },
        loaded: {
          ...state.loaded,
          createMatch: true,
        },
        matches: [...state.matches, payload],
      };
    }

    case MatchActions.CREATE_MATCH_FAIL: {
      return {
        ...state,
        loading: {
          ...state.loading,
          createMatch: true,
        },
        loaded: {
          ...state.loaded,
          createMatch: false,
        },
      };
    }

    default:
      return state;
  }
};

export default matchState;
