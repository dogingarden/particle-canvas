import DataApi from '../api/dataApi';

export const RESIZE_SCREEN = 'RESIZE_SCREEN';
export const LOAD_DATA_ASYNC = 'LOAD_DATA_ASYNC';
export const LOAD_DATA = 'LOAD_DATA';
export const CHANGE_DATA_TYPE = "CHANGE_DATA_TYPE";
export const UPDATE_CIRCLES_DATA = "UPDATE_CIRCLES_DATA";

export function resizeScreen(width, height) {
    return {
        type: RESIZE_SCREEN,
        width: width,
        height: height
    }
}
export function loadData(data) {

    return {
        type: LOAD_DATA,
        data: data.data,
    }
}
export function loadAllDataAsync() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    
    return DataApi.getAllDataAsync()
      .await((error,data) => {
          
          dispatch(loadData({data}));
      });
  };
}
export function changeDataType(showType) {
    return {
        type: CHANGE_DATA_TYPE,
        showType
    }
}
export function updateCirclesData(circlesData) {
    return {
        type: UPDATE_CIRCLES_DATA,
        circlesData
    }
}
