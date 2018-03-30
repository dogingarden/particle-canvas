import { connect } from 'react-redux'
import { changeDataType } from '../../actions'
import SelectView from '../../components/Header/Select'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.showType === state.showType,
  showType: ownProps.showType,
  dataName: ownProps.dataName
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(changeDataType(ownProps.showType))
  }
});

const SelectDom = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectView)

export default SelectDom
