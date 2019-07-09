module egret {
	export class Animation extends egret.DisplayObjectContainer{

		private currentTexturlIndex: number;
		private texturlLength: number;
		private bitMap: egret.Bitmap;
		private batchTexturl: egret.Texture[];
		private interval: number;
		private loop: boolean;
		private frameRate: number;
		private timeRecord: number;

		public constructor(Bitmap: egret.Bitmap) {
			super();
			this.initBaseData();
			this.bitMap = Bitmap;
			//获取当前帧速率
			this.frameRate = egret.MainContext.instance.stage.frameRate;

		}
		public initBaseData(){
			
			this.texturlLength = 0;
			this.currentTexturlIndex = 0;
			this.interval = 0.3;
			this.loop = false;
			this.timeRecord = 0;


		}
		//播放动画
		public playAnimation(obj?:{ texturl ?: egret.Texture[], interval ?: number, loop ?: boolean, callFunc ?: any}){
			
			this.initBaseData();			
			this.batchTexturl = obj.texturl;
			this.bitMap.texture = obj.texturl[0];
			this.loop = obj.loop;
			this.interval = obj.interval*1000;
			this.texturlLength = this.batchTexturl.length;
			this.addEventListener(egret.Event.ENTER_FRAME,this.update,this);
		}
		//更新数据
		public update(){
			this.timeRecord += 1000/this.frameRate;
			if(this.timeRecord >= this.interval ){
				this.timeRecord = 0;
				this.currentTexturlIndex++;
				if(this.currentTexturlIndex >= this.texturlLength){		
					if(this.loop){
						this.currentTexturlIndex = 0;
					}else{
						this.stopAnnimation();
						return;
					}
				}
				this.bitMap.texture = this.batchTexturl[this.currentTexturlIndex];
			}

		}

		public stopAnnimation(){
			this.removeEventListener(egret.Event.ENTER_FRAME,this.update,this);
			this.currentTexturlIndex = 0;
			this.timeRecord = 0;
			
		}
	}
}