
import React, {  Component } from 'react';
import PropTypes from 'prop-types';

import SelectDom from "../../containers/Header/SelectContainer";

import "./header.less";

class Header extends Component {
	
	render() {
		let filter = ["aaaaa","baaaa","caaaa","daaaa"];
    	return <div className="container">
    		
        	<h1>xxxx</h1>
	        <h2>aaaaa?</h2>
	        <h4>a canvas to show particle data</h4>
	        <div id="selectorcontainer">
		        <ul>
			        <li>
			            <span>展示类型:</span>
			          
			            {" "}
			            {filter.map((d,i)=>{
			            	return (<g> <SelectDom key={i} dataType={d}/>{(i!=filter.length-1)?"/ ":""}</g>)
			            })}
						
				    </li>
				</ul>

	        
		        <span id="about"><a href="http://vis27.com">彩色说</a>制作发布</span>
		    </div>
	    </div>	
	}
}

export default Header;
