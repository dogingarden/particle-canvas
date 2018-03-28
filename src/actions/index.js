import DataApi from '../api/dataApi';

export const RESIZE_SCREEN = 'RESIZE_SCREEN';
export const LOAD_DATA_ASYNC = 'LOAD_DATA_ASYNC';
export const LOAD_DATA = 'LOAD_DATA';

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
