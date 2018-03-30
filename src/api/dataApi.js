import * as d3 from 'd3';
import store from '../MyStore/store'

class DataApi{

	static getAllDataAsync(){
		return d3.queue()
      		.defer(d3.csv, 'data.csv');
			
	}
	/**
	 * 二次缓动, 具体请查看Tween源码
	 * @param {int} t:当前时间
	 * @param {int} b:初始值
	 * @param {int} c:变化量, 位移
	 * @param {int} d:持续时间
	 */
	static easeInOutQuad(t, b, c, d) {
		if((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	}
	// 三次缓动
	static easeInOutCubic(t, b, c, d) {
		if((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	}
	// bakc
	static easeInOutBack(t, b, c, d, s) {
		if(s == undefined) s = 1.70158;
		if((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	}
	static updateCirclesPositionRect(circlesData, width, height){

		var h=10,w=10;
		var r= store.getState().circleSetting.radius;
		var top = (height - (h * (r * 2 + 2))) / 2;
		var left = (width - (w * (r * 2 + 2))) / 2;
		for(var i = 0; i < w; i++) {
			for(var j = 0; j < h; j++) {
				var ba = circlesData[i * h + j] || {};
				ba.stauts = 1; // 更改状态，标记为特殊的粒子
				// ba.tp = easeInOutCubic;
				var tx = ba.x; // 当前的xy坐标
				var ty = ba.y;

				var zx = (r * 2 + 2) * i + left; // 计算应在所在的位置
				var zy = (r * 2 + 2) * j + top;

				var px = zx - tx; // 位移
				var py = zy - ty;

				ba.txb = ba.x; // 重新设置起点位置
				ba.tyb = ba.y;

				ba.txc = px; // 重新设置位移
				ba.tyc = py;

				ba.tt = 0; // 重置开始时间 和 结束重置
				ba.td = store.getState().circleSetting.duration / 6 * 60;
			}
		}
		return circlesData;
	}
	static updateCirclesPosition(circlesData, width, height){
		var data=circlesData.map(b=>{
			// 根据 tween 计算在当前帧的位置
			// txb 起点
			// txc 位移，可以随机一个值
			// tt tween时间
			// td 终止时间
			var border = store.getState().circleSetting.radius;
			var newx = DataApi.easeInOutQuad(b.tt, b.txb, b.txc, b.td);
			var newy = DataApi.easeInOutQuad(b.tt, b.tyb, b.tyc, b.td);

			// 四个方向的碰撞检测
			if(newx < border) {
				newx = 2*border-newx;
			}
			if(newy < border) {
				newy = 2*border-newy;
			}
			if(newx > width-border) {
				newx = 2 * (width - border) - newx;
			}
			if(newy > height-border) {
				newy = 2 * (height - border) - newy;
			}

			b.x = newx;
			b.y = newy;

			// 当运动时间结束之后   普通的粒子重新随机一个位移
			if(b.stauts == 0) {
				if(++b.tt >= b.td) {
					var rangeRadius=store.getState().circleSetting.rangeRadius;
					b.txb = b.x;
					b.tyb = b.y;
					b.txc= d3.randomUniform(-rangeRadius, rangeRadius)();
					b.tyc= d3.randomUniform(-rangeRadius, rangeRadius)();
					b.tt = 0;
				}
			} else if(b.stauts == 1) {
				if(b.tt < b.td) {
					b.tt++;
				}
			}
			if(b.x<border||b.y<border){
				console.log(b);
			}
			return b;
		})
		return data;
	}
}
export default DataApi;