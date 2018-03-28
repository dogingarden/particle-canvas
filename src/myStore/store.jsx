import {createStore, applyMiddleware} from 'redux';
import mapApp from '../reducers';
import thunk from 'redux-thunk';

let store = createStore(
      mapApp,
      applyMiddleware(thunk)
    );
export default store;