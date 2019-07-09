class FollowWeChat extends eui.Component implements  eui.UIComponent {

	public notRemind:eui.Image;
	public tick:eui.Image;
	public nowAttention:eui.Image;
	public alreadyAttention:eui.Image;

	private lock : boolean = true;
	private isHide : boolean = false;


	public constructor() {
		super();
		this.skinName = "resource/eui_skins/FollowWeChat.exml";
		this.addEventListener(eui.UIEvent.ADDED_TO_STAGE,this.init,this);
	}

	public init(){
		this.y=-1008;
		egret.Tween.get(this).to({y:0},700,egret.Ease.backOut);
		this.alreadyAttention.addEventListener(egret.TouchEvent.TOUCH_TAP,this.alAttentionFunc,this);
		this.nowAttention.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nowAttentionFunc,this);
		this.notRemind.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tickFunc,this);
		this.tick.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tickFunc,this);

	}
	//由于接口不大懂，现在关注和已经关注功能一样
	private alAttentionFunc(){
		if(!this.lock){
			return;
		}
		this.lock = false;
		egret.Tween.get(this).to({y:-1008},700,egret.Ease.backIn).call(()=>{
			this.parent.removeChild(this);
		});

	}
	private nowAttentionFunc(){
		// if(!this.lock){
		// 	return;
		// }
		// this.lock = false;
		egret.Tween.get(this).to({y:-1008},700,egret.Ease.backIn).call(()=>{
			this.parent.removeChild(this);
		});
	}
	private tickFunc(){
		this.isHide = !this.isHide;
		this.tick.visible = this.isHide;
	}
	
}