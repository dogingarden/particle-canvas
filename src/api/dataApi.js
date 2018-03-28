import * as d3 from 'd3';

class DataApi{

	static getAllDataAsync(){
		return d3.queue()
      		.defer(d3.csv, 'data.csv');
			
	}
}
export default DataApi;