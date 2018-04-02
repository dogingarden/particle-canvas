import * as d3 from 'd3';
import store from '../MyStore/store'

class DataApi{

	static getAllDataAsync(){
		return d3.queue()
      		.defer(d3.json, 'data.json');
			
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
	static updateCirclesPositionRect(circlesData, width, height, showData){

		var num=0;
		let h,w=10;
		let r= store.getState().circleSetting.radius;
		circlesData.sort((a,b)=>{
			return Math.random() > 0.5 ? -1 : 1;
		});
		showData.forEach((d,i)=>{
			


			let top = (height - (h * (r * 2 + 2))) / 2;
			let left = (i+1)*width/(showData.length+1) - (w-1) * (r * 2 + 2) / 2;
			let bottom = height*1/2-10;

			let circleNum = showData[i].Value;
			
			h=Math.ceil(circleNum/w);
			for(var i = 0; i < h; i++) {
				for(var j = 0; j < w; j++) {
					// if((i)*w+j>d.Value)
					// 	break;
					var ba = circlesData[num + i * w + j] || {};
					ba.stauts = 1; // 更改状态，标记为特殊的粒子
					// ba.tp = easeInOutCubic;
					var tx = ba.x; // 当前的xy坐标
					var ty = ba.y;

					var zx = (r * 2 + 2) * j + left; // 计算应在所在的位置
					var zy = -(r * 2 + 2) * i + bottom;

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
			num+=circleNum;
		});
		return circlesData;
	}
	static setNormalOfAllParticle(data){
		let duration = store.getState().circleSetting.duration;
		let td=(duration + d3.randomUniform(-duration / 2, duration / 2)()) * 60;
		let rangeRadius=1;
		return data.map(function(d){
			let td=(duration + d3.randomUniform(-duration / 2, duration / 2)()) * 60;
			if(d.stauts==1){
				d.stauts=0;
				d.txb=d.x;
				d.tyb=d.y;
				d.txc=d3.randomUniform(-rangeRadius, rangeRadius)();
				d.tyc=d3.randomUniform(-rangeRadius, rangeRadius)();
				d.td=td;
				d.tt=d3.randomUniform(0,td)();

			}
			return d;
		})
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
			return b;
		})
		return data;
	}
}
export default DataApi;