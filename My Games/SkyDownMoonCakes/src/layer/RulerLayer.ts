class RulerLayer extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/RulerLayer.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
	}

	public IknowBtn:eui.Image;
	public lock:boolean = true;


	private init(){
		this.IknowBtn.touchEnabled = true;
		this.IknowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.IknBtFunc,this);
	}

	private IknBtFunc(){
		if(!this.lock){
			return;
		}
		this.lock = false;
		this.parent.removeChild(this);
	}
	
}