class HomeScene extends eui.Component implements  eui.UIComponent {
	public lanternRight:eui.Image;
	public lanternLeft:eui.Image;
	public lanternMiddle:eui.Image;
	public moonLight:eui.Image;
	public rabbit:eui.Image;
	public playBtn:eui.Image;
	public rulerBtn:eui.Image;
	public rankBtn:eui.Image;


	public constructor() {
		super();
		this.skinName="resource/eui_skins/HomeScene.exml";
		this.addEventListener(eui.UIEvent.ADDED_TO_STAGE,this.init,this);
	}

	private init(){
		//微信层掉下来
		this.addChild(new FollowWeChat());
		//开始页面动画
		this.playAnimation();
		this.playBtn.touchEnabled = true;
		this.rulerBtn.touchEnabled = true;
		this.rankBtn.touchEnabled = true;

		//规则层
		this.rulerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rulerBtFunc,this);
		this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rankBtFunc,this);
		this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.playBtFunc,this);


	}

	//开始页面动画
	private playAnimation(){

		//灯笼旋转
		var lanternLeftX = this.lanternLeft.x,
			lanternLeftY = this.lanternLeft.y,
			lanternMiddleX = this.lanternMiddle.x,
			lanternMiddleY = this.lanternMiddle.y,
			lanternRightX = this.lanternRight.x,
			lanternRightY = this.lanternRight.y;
		egret.Tween.get(this.lanternLeft,{loop:true}).to({rotation:5,x:lanternLeftX+5,y:lanternLeftY+5},700)
		.to({rotation:0,x:lanternLeftX,y:lanternLeftY},700)
		.to({rotation:-5,x:lanternLeftX-5,y:lanternLeftY+5},700)
		.to({rotation:0,x:lanternLeftX,y:lanternLeftY},700);

		egret.Tween.get(this.lanternMiddle,{loop:true}).to({rotation:5,x:lanternMiddleX+5,y:lanternMiddleY+5},650)
		.to({rotation:0,x:lanternMiddleX,y:lanternMiddleY},650)
		.to({rotation:-5,x:lanternMiddleX-5,y:lanternMiddleY+5},650)
		.to({rotation:0,x:lanternMiddleX,y:lanternMiddleY},650);

		egret.Tween.get(this.lanternRight,{loop:true}).to({rotation:5,x:lanternRightX+5,y:lanternRightY+5},600)
		.to({rotation:0,x:lanternRightX,y:lanternRightY},600)
		.to({rotation:-5,x:lanternRightX-5,y:lanternRightY+5},600)
		.to({rotation:0,x:lanternRightX,y:lanternRightY},600);


		//月亮发光动画
		egret.Tween.get(this.moonLight,{loop:true}).to({scaleX:0.7,scaleY:0.7},1800)
		.to({scaleX:1,scaleY:1},1800);


		//兔子摇船动画
		egret.Tween.get(this.rabbit,{loop:true}).to({x : 189 + 5, y:684+2.5},500)
		.to({x : 189 + 10, y : 684+ 5},500)
		.to({x : 189 + 15, y : 684 + 2.5 },500)
		.to({x : 189 + 20, y : 684 + 0}, 500)
		.to({x : 189 + 15, y : 684 - 2.5}, 500)
		.to({x : 189 + 10, y : 684 - 5}, 500)
		.to({x : 189 + 5, y : 684 - 2.5}, 500)
		.to({x : 189 , y : 684 }, 500)


		

	}
	//规则层
	private rulerBtFunc(){
		this.addChild(new RulerLayer());
	}
	//排名层
	private rankBtFunc(){
		this.addChild(new RankLayer());

	}
	//游戏开始
	private playBtFunc(){
		SceneControl.run(new ControllScene());
	}
}