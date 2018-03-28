import React    from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { select as d3Select } from 'd3';

import AppContainer from './containers/AppContainer';
import { resizeScreen ,loadAllDataAsync} from './actions';
import store from './MyStore/store'

import "./main.less";

const app = document.querySelectorAll('.main')[0];


ReactDOM.render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>, app);

let onResize = function () {
    store.dispatch(resizeScreen(window.innerWidth, window.innerHeight));
}

onResize();

d3Select(window).on('resize', onResize);

store.dispatch(loadAllDataAsync());