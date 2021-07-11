export const MatchActions = {
  LIST_MATCHES: "[Match] List Matches",
  LIST_MATCHES_SUCCESS: "[Match] List Matches Success",
  LIST_MATCHES_FAIL: "[Match] List Matches Fail",

  CREATE_MATCH: "[Match] Create Match",
  CREATE_MATCH_SUCCESS: "[Match] Create Match Success",
  CREATE_MATCH_FAIL: "[Match] Create Match Fail",
};

export const listMatches = (payload) => ({
  type: MatchActions.LIST_MATCHES,
  payload,
});

export const listMatchesSuccess = (payload) => ({
  type: MatchActions.LIST_MATCHES_SUCCESS,
  payload,
});

export const listMatchesFail = (payload) => ({
  type: MatchActions.LIST_MATCHES_FAIL,
  payload,
});

export const createMatch = (payload) => ({
  type: MatchActions.CREATE_MATCH,
  payload,
});

export const createMatchSuccess = (payload) => ({
  type: MatchActions.CREATE_MATCH_SUCCESS,
  payload,
});

export const createMatchFail = (payload) => ({
  type: MatchActions.CREATE_MATCH_FAIL,
  payload,
});
