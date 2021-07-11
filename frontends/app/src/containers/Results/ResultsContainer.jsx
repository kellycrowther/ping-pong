import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { createMatch, createPlayer, listMatches } from "../../core/actions";
import { getMatchesSelector } from "../../core/selectors/match.selectors";
import { getPlayersSelector } from "../../core/selectors/player.selectors";

import { Results } from "./Results";

export default compose(
  connect(
    (state) => ({
      players: getPlayersSelector(state),
      matches: getMatchesSelector(state),
    }),
    (dispatch) => ({
      createPlayer: (payload) => dispatch(createPlayer(payload)),
      createMatch: (payload) => dispatch(createMatch(payload)),
      listMatches: () => dispatch(listMatches()),
    })
  ),
  lifecycle({
    componentDidMount() {
      this.props.listMatches();
    },
  })
)(Results);
