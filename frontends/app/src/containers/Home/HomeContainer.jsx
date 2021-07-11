import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { createPlayer, listRankedPlayers } from "../../core/actions";
import { getRankedPlayersSelector } from "../../core/selectors/player.selectors";

import { Home } from "./Home";

export default compose(
  connect(
    (state) => ({
      rankedPlayers: getRankedPlayersSelector(state),
    }),
    (dispatch) => ({
      createPlayer: (payload) => dispatch(createPlayer(payload)),
      listRankedPlayers: () => dispatch(listRankedPlayers()),
    })
  ),
  lifecycle({
    componentDidMount() {
      this.props.listRankedPlayers();
    },
  })
)(Home);
