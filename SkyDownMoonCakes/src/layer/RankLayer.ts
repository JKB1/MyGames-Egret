class RankLayer extends eui.Component implements  eui.UIComponent {

	public IknowBtn:eui.Image;
	public lock : boolean = true;
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/RankLayer.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
	}

	private init(){
		this.IknowBtn.touchEnabled = true;
		this.IknowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.iKnowBtnFunc,this);

	}

	private iKnowBtnFunc():void{
		if(!this.lock){
			return;
		}
		this.lock = false;
		egret.Tween.get(this).to({y:-1008},700,egret.Ease.backIn).call(()=>{
			this.parent.removeChild(this);
		});
	}
	
}