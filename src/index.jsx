import React    from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { select as d3Select } from 'd3';
import * as d3 from "d3";

import AppContainer from './containers/AppContainer';
import { resizeScreen ,loadAllDataAsync, updateCirclesData} from './actions';
import store from './MyStore/store'

import "./main.less";

const app = document.querySelectorAll('.main')[0];


ReactDOM.render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>, app);

// let onResize = function () {
//     store.dispatch(resizeScreen(window.innerWidth, window.innerHeight));
// }

// onResize();

// d3Select(window).on('resize', onResize);

store.dispatch(loadAllDataAsync());
let data=[];
let duration=store.getState().circleSetting.duration;
let border=store.getState().circleSetting.radius;
for(let i=0;i< store.getState().circlesNum;i++){
	let x=d3.randomUniform(border, store.getState().width-2*border)();
	let y=d3.randomUniform(border, store.getState().height-2*border)();
	let td=(duration + d3.randomUniform(-duration / 2, duration / 2)()) * 60;
	let rangeRadius=store.getState().circleSetting.rangeRadius;
	data.push({
		id:i,
		stauts: "0",
		x,
		y,
		txb:x,
		tyb:y,
		txc:d3.randomUniform(-rangeRadius, rangeRadius)(),
		tyc:d3.randomUniform(-rangeRadius, rangeRadius)(),
		td,
		tt:d3.randomUniform(0,td)(),
		tp:"easeInOutQuad"
	});
}
store.dispatch(updateCirclesData(data));