
import { combineReducers } from 'redux';
import { randomNormal, range, randomUniform } from 'd3';

const initialState = {
    width: 1400,      //canvas宽度
    height: 625,     //canvas高度
    data:null,          //数据
    isFetching :true,   //是否在加载
    showType: "random",   //展示数据类型
    circleSetting:{
            "color": "#ef6654",         // 颜色
            "concentration": 0.5,       
            "radius": 5,                // 半径
            "opacity": 0.9,             //透明度
            "duration": 6,             // 运动的时间
            "rangeRadius": 625,         // 运动的范围 
            
            
    },
    circlesNum:100,            //粒子个数
    circlesData:[]             //粒子对象存储数组
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
        case "UPDATE_CIRCLES_DATA":
            return Object.assign({},state, {
                circlesData: action.circlesData
            });
        default:
            return state;
    }
}

export default app;
