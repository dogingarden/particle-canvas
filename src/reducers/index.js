
import { combineReducers } from 'redux';
import { randomNormal, range, randomUniform } from 'd3';

const initialState = {
    width: 1400,      //canvas宽度
    height: 625,     //canvas高度
    data:null,          //数据
    isFetching :true,   //是否在加载
    showType: "aaaaa",   //展示数据类型
    circleSetting:{
            "color": "#ffffff",         // （可选）粒子的颜色
            "concentration": 0.5,       // （可选）浓度
            "radius": 5,                // （可选）例子半径
            "opacity": 0.9,             // （可选）粒子透明度
            "duration": 16,             // （可选）运动的时间（秒）大概值不一定精确
            "rangeRadius": 512,         // （可选）粒子运动的范围 
            "circleNum": 1000            //粒子个数 
    }
};


function app(state = initialState, action) {
    switch (action.type) {
        case 'RESIZE_SCREEN':
            return Object.assign({}, state, {
                height: action.width,
                width: action.height
            });
        case "LOAD_DATA":
            return Object.assign({}, state, {
                data: action.data,
                isFetching: false
            });
        case "CHANGE_DATA_TYPE":
            return Object.assign({},state, {
                showType: action.showType
            });
        default:
            return state;
    }
}

export default app;
