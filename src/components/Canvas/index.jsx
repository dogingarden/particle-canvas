
import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { render } from "react-dom";
import { Stage, Layer } from 'react-konva';

import BackgroundContainer from "../../containers/Canvas/BackgroundContainer";
import CirclesContainer from "../../containers/Canvas/CirclesContainer";
import Axis from "../../containers/Axis/AxisContainer"

class Canvas extends Component {
	
	render() {
		const {height,width,showType} = this.props;
		const axis = (showType=="random") ? (
          null
        ) : (
          <Axis />
        );
	    return (
	      <Stage  width = {width} height = {height} >
	        <Layer>
	          <BackgroundContainer />
	          <CirclesContainer/>
	          {axis}
	        </Layer>
	      </Stage>
	    );
	 }
}

export default Canvas;
