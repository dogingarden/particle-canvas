
import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { render } from "react-dom";
import { Circle } from 'react-konva';
import Konva from 'konva';
import * as d3 from "d3";
import { Group } from 'react-konva';

import DataApi from '../../api/dataApi';

class Circles extends React.Component {
  
  /** setInterval返回一个整数，表示定时器的编号，以后可以用来取消这个定时器*/
  startTicker() {

      let data = DataApi.updateCirclesPosition(this.props.circlesData, this.props.width, this.props.height);
      this.props.updateCirclesData(data);
      this.requestID = requestAnimationFrame(this.startTicker);
  }
  componentDidMount() {

      this.startTicker = this.startTicker.bind(this);
      let props=this.props;
      let data = DataApi.updateCirclesPosition(this.props.circlesData, this.props.width, this.props.height);
      this.props.updateCirclesData(this.props.circlesData); /* 一开始发起一次请求*/

      this.requestID = requestAnimationFrame(d=>{
          let data = DataApi.updateCirclesPosition(props.circlesData, props.width, props.height);

          props.updateCirclesData(data)
      });
      this.startTicker()
  }
  componentWillUnmount() {

      window.cancelAnimationFrame(this.requestID);
  }

  componentWillReceiveProps(newProps) {
    
    const { showType } = this.props;
    let props=this.props;
    if(showType!==newProps.showType && newProps.showType !== "random"){
      // window.cancelAnimationFrame(this.requestID);
      if(newProps.showType=="rect"){
        var data = DataApi.updateCirclesPositionRect(props.circlesData, props.width, props.height);
        props.updateCirclesData(data)
      }
    }else if(showType!==newProps.showType && newProps.showType == "random"){
      // this.startTicker()
    }
  }

  conponentDidUpdate(){
      // let props=this.props;
      // console.log(props.dataType)
  }



  render() {

    const { circleSetting,circlesData } = this.props;
    
    return (
      <Group>
        {circlesData.map((d,i)=>{
          return (<Circle
                  key={i}
                  x={d.x}
                  y={d.y}
                  radius={circleSetting.radius}
                  fill={circleSetting.color}
                />)
        })}
      </Group>
    );
  }
}

export default Circles;