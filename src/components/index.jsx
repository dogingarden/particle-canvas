
import React, {  Component } from 'react';
import ReactDOM from 'react-dom';

import Preloader from '../utils/Preloader';
import Header from './Header';
import Canvas from './Canvas';
import SelectDom from "../containers/Header/SelectContainer";
import "./main.less"

class App extends Component {

    componentDidMount() {
        
        // loadAllData(data => store.dispatch(loadData(data)));
    }

    render() {
        if (this.props.isFetching) {
            return (
                <Preloader />
            );
        }
        let filter = [{name:"无序状态",type:"random"},{name:"矩形布局",type:"rect"},{name:"圆形布局",type:"circle"},{name:"图案布局",type:"img"}];
        return (
          <div id="vis_container">
              <Header/>
              <div id="selectorcontainer">
                <ul>
                  <li>
                      <span>展示类型:</span>
                    
                      {" "}
                      {filter.map((d,i)=>{
                        return (<span key={i}> <SelectDom showType={d.type} dataName={d.name}/>{(i!=filter.length-1)?"/ ":""}</span>)
                      })}
                
                  </li>
                </ul>
              </div>
              <Canvas id="vis-canvas" width={this.props.width} height={this.props.height}/>
              <div className="footer">
                <div id="signature">
                    <a href="vis27.com"><img id="logo" src="./colorful.logo.png"/></a>
                    <div>Created by: @孔令远 </div>
                </div>
              </div>
          </div>
        );
    }
}


export default App;