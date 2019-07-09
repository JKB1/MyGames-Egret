class rulerLayer extends eui.Component implements  eui.UIComponent {

	public close:eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/rulerLayer.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
	}

	public init(){
		this.close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBtn,this);
	}
	
	public closeBtn(){
		this.alpha = 0;
		this.parent.removeChild(this);
	}
}