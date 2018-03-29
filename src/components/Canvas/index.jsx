
import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { render } from "react-dom";
import { Stage, Layer } from 'react-konva';

import BackgroundContainer from "../../containers/Canvas/BackgroundContainer";
import CirclesContainer from "../../containers/Canvas/CirclesContainer";

class Canvas extends Component {
	
	render() {
		const {height,width} = this.props;
	    return (
	      <Stage  width = {width} height = {height} >
	        <Layer>
	          <BackgroundContainer />
	          <CirclesContainer/>
	        </Layer>
	      </Stage>
	    );
	 }
}

export default Canvas;
