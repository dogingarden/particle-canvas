
import { combineReducers } from 'redux';
import { randomNormal, range, randomUniform } from 'd3';

const initialState = {
    svgWidth: 800,      //canvas宽度
    svgHeight: 600,     //canvas高度
    data:null,          //数据
    isFetching :true    //是否在加载
};


function app(state = initialState, action) {
    switch (action.type) {
        case 'RESIZE_SCREEN':
            return Object.assign({}, state, {
                svgWidth: action.width,
                svgHeight: action.height
            });
        case "LOAD_DATA":
            return Object.assign({}, state, {
                data: action.data,
                isFetching: false
            });
        default:
            return state;
    }
}

export default app;
