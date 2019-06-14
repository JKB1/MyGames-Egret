class GuildLayer extends eui.Component implements  eui.UIComponent {

	private callFunc:any;
	public constructor(callFunc?) {
		super();
		this.skinName = "resource/eui_skins/GuildLayer.exml";
		this.callFunc = callFunc;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.init,this)
	}
	public init(){
		this.alpha = 0;
		if(this.callFunc){
			this.callFunc();
		}
		this.parent.removeChild(this);
	}
	
}