import { connect } from 'react-redux'
import { changeDataType } from '../../actions'
import SelectView from '../../components/Header/Select'

//mapStateToProps是一个函数。
//它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
//mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.type === state.showType,
  type: ownProps.type
})
//mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。
//也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
//
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(changeDataType(ownProps.type))
  }
})
//上面代码中，Link是 UI 组件，FilterLink就是由 React-Redux 通过connect方法自动生成的容器组件。
//connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。
//前者负责输入逻辑，即将state映射到 UI 组件的参数（props），
//后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
const SelectDom = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectView)

export default SelectDom
