
import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { render } from "react-dom";
import { Rect } from 'react-konva';
import Konva from 'konva';
// import SelectDom from "../../containers/Header/SelectContainer";

// import "./header.less";
class Background extends React.Component {
  
  state = {
    color: '#D9D9DE'
  };

  render() {
    const {width,height} = this.props;

    return (
      <Rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={this.state.color}
        shadowBlur={5}
      />
    );
  }
}

export default Background;