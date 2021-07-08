import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { createPlayer } from "../../core/actions";

import { Home } from "./Home";

export default compose(
  connect(
    (state) => ({}),
    (dispatch) => ({
      createPlayer: (payload) => dispatch(createPlayer(payload)),
    })
  ),
  lifecycle({})
)(Home);
