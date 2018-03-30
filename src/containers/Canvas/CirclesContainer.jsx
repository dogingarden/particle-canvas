import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Circles from '../../components/Canvas/Circles';
import { updateCirclesData} from '../../actions';
import store from '../../MyStore/store'

const mapStateToProps = (state, ownProps) => ({
  circleSetting: state.circleSetting,
  width: state.width,
  height: state.height,
  circlesData: state.circlesData,
  showType: state.showType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateCirclesData: bindActionCreators(updateCirclesData, dispatch)
});

const CirclesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Circles)

export default CirclesContainer
