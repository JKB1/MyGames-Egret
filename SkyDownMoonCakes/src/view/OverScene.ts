class OverScene extends eui.Component implements  eui.UIComponent {

	public rankBtn:eui.Image;
	public tryAgain:eui.Image;
	public scoreLabel:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/OverScene.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
		this.scoreLabel.text = Score.score.toString();
	}

	public init(){

		this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rankBtnFunc,this);
		this.tryAgain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tryAgainFunc,this);
		
	}
	public rankBtnFunc(){
		this.addChild(new RankLayer());
	}
	public tryAgainFunc(){
		SceneControl.run(new ControllScene());
	}
}