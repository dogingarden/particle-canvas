import { connect } from 'react-redux'

import Circles from '../../components/Canvas/Circles'

const mapStateToProps = (state, ownProps) => ({
  circleSetting: state.circleSetting,
  width: state.width,
  height: state.height
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const CirclesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Circles)

export default CirclesContainer
