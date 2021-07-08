import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import App from "../../App";

import { listPlayers } from "../../core/actions";
import { getPlayersSelector } from "../../core/selectors/player.selectors";

export default compose(
  connect(
    (state) => ({
      players: getPlayersSelector(state),
    }),
    (dispatch) => ({
      listPlayers: () => dispatch(listPlayers()),
      // checkLocalStorageAuth: (payload) =>
      //   dispatch(checkLocalStorageAuth(payload)),
    })
  ),
  lifecycle({
    componentDidMount() {
      this.props.listPlayers();
    },
  })
)(App);
