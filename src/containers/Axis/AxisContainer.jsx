import { connect } from 'react-redux'

import Axis from '../../components/Axis/Axis'

const mapStateToProps = (state, ownProps) => ({
  width: state.width,
  height: state.height,
  showType: state.showType,
  data: state.data
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const AxisContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Axis)

export default AxisContainer
