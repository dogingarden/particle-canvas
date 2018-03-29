import { connect } from 'react-redux'
import { changeDataType } from '../../actions'
import SelectView from '../../components/Header/Select'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.dataType === state.showType,
  dataType: ownProps.dataType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(changeDataType(ownProps.dataType))
  }
});

const SelectDom = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectView)

export default SelectDom
