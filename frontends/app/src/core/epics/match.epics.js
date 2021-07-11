import "rxjs";
import { of } from "rxjs";
import { mergeMap, takeUntil, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  MatchActions,
  createMatchSuccess,
  createMatchFail,
  listMatchesSuccess,
  listMatchesFail,
  listMatches,
} from "../actions";
import { axiosInstance } from "../provider/axiosInstance";
import { notification } from "antd";

export const listMatchesEpic = (actions$) => {
  return actions$.pipe(
    ofType(MatchActions.LIST_MATCHES),
    mergeMap(({ payload }) => {
      return axiosInstance
        .request({
          url: "/matches",
          method: "GET",
        })
        .pipe(
          map((res) => listMatchesSuccess(res.data)),
          takeUntil(actions$.pipe(ofType(MatchActions.LIST_MATCHES_SUCCESS))),
          catchError((error) => of(listMatchesFail(error)))
        );
    })
  );
};

export const createMatchEpic = (actions$) => {
  return actions$.pipe(
    ofType(MatchActions.CREATE_MATCH),
    mergeMap(({ payload }) => {
      return axiosInstance
        .request({
          url: "/matches",
          method: "POST",
          data: payload,
        })
        .pipe(
          map((res) => createMatchSuccess(res.data)),
          takeUntil(actions$.pipe(ofType(MatchActions.CREATE_MATCH_SUCCESS))),
          catchError((error) => of(createMatchFail(error)))
        );
    })
  );
};

export const createMatchSuccessEpic = (actions$, dispatch) => {
  return actions$.pipe(
    ofType(MatchActions.CREATE_MATCH_SUCCESS),
    mergeMap(({ payload }) => {
      notification.success({
        message: "Match Saved!",
      });
      return of(listMatches());
    })
  );
};

export const createMatchFailEpic = (actions$, dispatch) => {
  return actions$.pipe(
    ofType(MatchActions.CREATE_MATCH_FAIL),
    mergeMap(({ payload }) => {
      notification.error({
        message: "Match Not Saved!",
      });
      return of();
    })
  );
};
