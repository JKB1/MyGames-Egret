class HeroData extends egret.Sprite{
	private animation: egret.Animation;
	public display: egret.Bitmap;
	private runanimation: any;
	private eatanimation: any;
	public showScoreTips: ShowScoreTips;
	public showScore: number;
	public constructor() {
		super();
		this.showScore = 0;
		//添加人物图片
		this.display = new egret.Bitmap(RES.getRes("heroStand_png"));
		this.addChild(this.display);
		//奔跑动画
		this.runanimation = {
			texturl: [RES.getRes("heroRun0_png"), RES.getRes("heroRun1_png"), RES.getRes("heroRun2_png"), RES.getRes("heroRun3_png")],
			loop: true,
			interval: 0.1
		}
		//吃东西动画
		this.eatanimation = {
			texturl: [RES.getRes("heroEat0_png"), RES.getRes("heroEat1_png"), RES.getRes("heroEat2_png"), RES.getRes("heroEat3_png")],
			loop: false,
			interval: 0.1		
		}
		//this.display作为参数传给egret.Animation的构造函数，初始化egret.Animation的变量Bitmap，this.display即兔子站立的图片
		this.animation = new egret.Animation(this.display);
		//
		this.showScoreTips = new ShowScoreTips();
		this.showScoreTips.x = this.width/4;
		this.addChild(this.showScoreTips);
	

	}
	//奔跑动画
	public playRunAnimation(){
		this.animation.playAnimation(this.runanimation);
	}
	//爆炸动画
	public playBombAnimation(){
		this.stopAnimation();
		this.display.texture = RES.getRes("heroBomb_png");
	}

	//停止动画
	public stopAnimation(){
		this.animation.stopAnnimation();
	}

	//碰撞产生的分数
	public showScoreTip(str: string ){
		this.showScoreTips.show(str);
	}

	public collision(){
		var HeroLeft = this.x,
			HeroRight = this.x + this.display.width,
			HeroTop = this.y,
			HeroBottom = this.y + this.display.height;
	}
}