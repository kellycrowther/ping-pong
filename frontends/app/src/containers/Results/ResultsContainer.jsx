import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { createPlayer } from "../../core/actions";
import { getPlayersSelector } from "../../core/selectors/player.selectors";

import { Results } from "./Results";

export default compose(
  connect(
    (state) => ({
      players: getPlayersSelector(state),
    }),
    (dispatch) => ({
      createPlayer: (payload) => dispatch(createPlayer(payload)),
    })
  ),
  lifecycle({})
)(Results);
