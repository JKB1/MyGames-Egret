class TouchLayer extends egret.Sprite{
	public constructor() {
		super();
		this.graphics.beginFill(0x000000);
		this.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
		this.graphics.endFill();
		this.alpha = 0;

		this.touchEnabled = true;
		this.touchChildren = true;
		//当用户第一次触摸启用触摸的设备时（例如，用手指触摸配有触摸屏的移动电话或平板电脑）触发
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginFunc, this);
		//当用户触碰设备并移动时进行触发，而且会连续触发，直到接触点被删除
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveFunc, this);
		//当用户移除与启用触摸的设备的接触时（例如，将手指从配有触摸屏的移动电话或平板电脑上抬起）触发
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.endFunc, this);

	}

	private beginFunc(evt: egret.TouchEvent){
		touchData.touchX = evt.stageX;
		touchData.touchY = evt.stageY;
		touchData.touchType = "begin";
		if (touchData.callFunc) {
			touchData.callFunc(evt);
		}
	};
	private moveFunc(evt: egret.TouchEvent){
		touchData.touchType = "move";
		touchData.touchX = evt.stageX;
		touchData.touchY = evt.stageY;
		if (touchData.callFunc) {
			touchData.callFunc(evt);
		}
	};
	private endFunc(evt: egret.TouchEvent){
		touchData.touchType = "end";
		touchData.touchX = evt.stageX;
		touchData.touchY = evt.stageY;
		if (touchData.callFunc) {
			touchData.callFunc(evt);
		}
	};
}