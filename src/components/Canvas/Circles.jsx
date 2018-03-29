
import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { render } from "react-dom";
import { Circle } from 'react-konva';
import Konva from 'konva';
import * as d3 from "d3";
import { Group } from 'react-konva';

class Circles extends React.Component {
  


  render() {

    const { circleSetting,width,height } = this.props;
    // const data=new Array(circleSetting.circleNum);
    // data.map((d,i)=>{console.log(d)})
    let data=[];
    for (let i=0;i<circleSetting.circleNum;i++)
    {
      data.push(1);
    }
    return (
      <Group>
        {data.map((d,i)=>{
          return (<Circle
                  key={i}
                  x={d3.randomUniform(0, width)()}
                  y={d3.randomUniform(0, height)()}
                  radius={circleSetting.radius}
                  
                  fill={circleSetting.color}
                />)
        })}
      </Group>
    );
  }
}

export default Circles;