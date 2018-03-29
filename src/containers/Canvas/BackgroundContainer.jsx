import { connect } from 'react-redux'

import Background from '../../components/Canvas/Background'

const mapStateToProps = (state, ownProps) => ({
  width: state.width,
  height: state.height
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const BackgroundContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Background)

export default BackgroundContainer
