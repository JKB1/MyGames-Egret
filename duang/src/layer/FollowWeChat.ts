class FollowWeChat extends eui.Component implements  eui.UIComponent {

	public attention:eui.Image;
	public nowAttention:eui.Image;
	public lock: boolean = false;//防止多次点击


	public constructor() {
		super();
		this.skinName = "resource/eui_skins/FollowWeChat.exml"
		this.y = -1008;
		egret.Tween.get(this).to({ y : 0},700,egret.Ease.backOut);
		this.attention.touchEnabled = true;
		this.nowAttention.touchEnabled = true;
		this.attention.addEventListener(egret.TouchEvent.TOUCH_TAP,this.attenFunc,this);
		this.nowAttention.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nowAttenFunc,this);
	}
	public attenFunc(){
		if(this.lock){
			return;
		}else{
			this.lock = true;
			egret.Tween.get(this).to({y: -1008},700,egret.Ease.backIn).call(()=>{
			this.parent.removeChild(this);
			})
		}
	}
	public nowAttenFunc(){
		if(this.lock){
			return;
		}else{
			this.lock = true;
			egret.Tween.get(this).to({y: -1008},700,egret.Ease.backIn).call(()=>{
			this.parent.removeChild(this);
			})
		}
	}
	
}