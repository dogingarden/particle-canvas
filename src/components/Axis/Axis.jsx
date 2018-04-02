
import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { render } from "react-dom";
import { Group, Text, Line, Circle } from 'react-konva';
import Konva from 'konva';


// import BackgroundContainer from "../../containers/Canvas/BackgroundContainer";
// import CirclesContainer from "../../containers/Canvas/CirclesContainer";

class Axis extends Component {

	
	render() {
		const {height,width,showType,data} = this.props;
		var showData=[];
		data.forEach(d=>{
			if(d.name==showType){
				showData= d.data;
			}
		});
		const axisColor="#8c3134";
	    return (
	    <Group>
	    {showData.map((d,i)=>{
	      	return <Line 	key={i}
		      				points= {[(i+1)*width/(showData.length+1)-width/(showData.length+1)/4,height*1/2,
		      				 (i+1)*width/(showData.length+1)+width/(showData.length+1)/4, height*1/2
		      				  ]}
					      	stroke={axisColor}
					      	strokeWidth= {3}
						    lineCap= 'round'
						    lineJoin= 'round'
	      			/>

	    	})
	    }

	    {showData.map((d,i)=>{
	      	return <Text 	key={i}
	      			x={(i+1)*width/(showData.length+1)-width/(showData.length+1)/2}
	      			y={height*1/2+10}
	      			text={d.chineseName} 
	      			align= 'center'
	      			width={width/(showData.length+1)}
	      			fontSize= "15"
			      	fill= {axisColor}
	      			/>

	    	})
	    }
	    </Group>
	    );
	 }
}

export default Axis;