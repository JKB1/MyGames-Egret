class HomeScene extends eui.Component implements  eui.UIComponent {

	public playBtn:eui.Image;
	public rulerBtn:eui.Image;
	public rankBtn:eui.Image;
	public blue:eui.Image;
	public pink:eui.Image;
	public yellow:eui.Image;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/HomeScene.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
		
	}

	public init(){
		this.addChild(new FollowWeChat());
		this.playAnimation();
		this.playBtn.touchEnabled = true;
		this.rulerBtn.touchEnabled = true;
		this.rankBtn.touchEnabled = true;
		this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.playGame,this);
		this.rulerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ruleBtn,this);
		this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rankingBtn,this);
		
	}
	//开始页面动画
	public playAnimation(){
		//blue动画
		egret.Tween.get(this.blue,{ loop: true}).to({y: 920-10},100)
		.to({y: 920-20},100).to({y: 920-30},100).to({y: 920-40},100)
		.to({y: 920-50},100).to({y: 920-60},100).to({y: 920-70},100)
		.to({y: 920-60},100).to({y: 920-50},100).to({y: 920-40},100)
		.to({y: 920-30},100).to({y: 920-20},100).to({y: 920-10},100)
		.to({y: 920},100);

		//pink动画
		egret.Tween.get(this.pink,{ loop: true}).to({y: 910-10},100)
		.to({y: 910-20},100).to({y: 910-30},100).to({y: 910-40},100)
		.to({y: 910-50},100).to({y: 910-40},100).to({y: 910-30},100)
		.to({y: 910-20},100).to({y: 910-10},100).to({y: 910},100);

		//yellow动画
		egret.Tween.get(this.yellow,{ loop: true}).to({y: 918-10},100)
		.to({y: 918-20},100).to({y: 918-30},100).to({y: 918-40},100)
		.to({y: 918-50},100).to({y: 918-60},100).to({y: 918-50},100)
		.to({y: 918-40},100).to({y: 918-30},100).to({y: 918-20},100)
		.to({y: 918-10},100).to({y: 918},100);
	}

	//开始游戏
	public playGame(){
		SceneControl.run(new ControllerScene());
	}

	//规则说明
	public ruleBtn(){
		this.addChild(new rulerLayer());
	}

	//排名
	public rankingBtn(){

	}
	
}