import "rxjs";
import { of } from "rxjs";
import { mergeMap, takeUntil, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  PlayerActions,
  listPlayerFail,
  listPlayerSuccess,
  createPlayerFail,
  createPlayerSuccess,
} from "../actions";
import { axiosInstance } from "../provider/axiosInstance";
import { notification } from "antd";

export const listPlayersEpic = (actions$) => {
  return actions$.pipe(
    ofType(PlayerActions.LIST_PLAYERS),
    mergeMap(({ payload }) => {
      return axiosInstance
        .request({
          url: "/players",
          method: "GET",
        })
        .pipe(
          map((res) => listPlayerSuccess(res.data)),
          takeUntil(actions$.pipe(ofType(PlayerActions.LIST_PLAYERS_SUCCESS))),
          catchError((error) => of(listPlayerFail(error)))
        );
    })
  );
};

export const createPlayerEpic = (actions$) => {
  return actions$.pipe(
    ofType(PlayerActions.CREATE_PLAYER),
    mergeMap(({ payload }) => {
      return axiosInstance
        .request({
          url: "/players",
          method: "POST",
          data: payload,
        })
        .pipe(
          map((res) => createPlayerSuccess(res.data)),
          takeUntil(actions$.pipe(ofType(PlayerActions.CREATE_PLAYER_SUCCESS))),
          catchError((error) => of(createPlayerFail(error)))
        );
    })
  );
};

export const createPlayerSuccessEpic = (actions$, dispatch) => {
  return actions$.pipe(
    ofType(PlayerActions.CREATE_PLAYER_SUCCESS),
    mergeMap(({ payload }) => {
      notification.success({
        message: "Player Saved!",
      });
      return of();
    })
  );
};

export const createPlayerFailEpic = (actions$, dispatch) => {
  return actions$.pipe(
    ofType(PlayerActions.CREATE_PLAYER_FAIL),
    mergeMap(({ payload }) => {
      notification.error({
        message: "Player Not Saved!",
      });
      return of();
    })
  );
};
