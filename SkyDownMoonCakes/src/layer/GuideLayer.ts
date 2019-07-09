class GuideLayer extends eui.Component implements  eui.UIComponent {
	//public guide:eui.Rect;
	private callFunc : any;
	public constructor(call ?: any) {
		super();
		this.callFunc = call;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guideFunc,this);
	}

	private guideFunc(){
		egret.Tween.get(this).to({y:-1008},700,egret.Ease.backIn).call(()=>{
			if(this.callFunc){
				this.callFunc();
			}
			this.parent.removeChild(this);
			
		})
	}
	
	
}