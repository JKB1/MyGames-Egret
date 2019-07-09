class ControllScene extends egret.DisplayObjectContainer{

	private backgroundLayer:BackgroundLayer;
	private statusLayer: StatusLayer;
	private guideLayer: GuideLayer;
	private animationLayer: AnimationLayer;
	private touchLayer: TouchLayer;
	private timer: egret.Timer;

	public constructor() {
		super();
		//
		GameData.Instance.init();

		Score.score = 0;
		//触摸数据的初始化
		touchData.init();
		//背景层
		this.backgroundLayer = new BackgroundLayer();
		this.addChild(this.backgroundLayer);



		//动画层
		this.animationLayer = new AnimationLayer();
		this.addChild(this.animationLayer);


		// //触摸层数据的初始化
		 this.touchLayer = new TouchLayer();
		 this.addChild(this.touchLayer);

		
		
		//我的得分
		// this.score = new ShowScore();
		// this.addChild(this.score);
		// this.score.show("k");
		this.statusLayer = new StatusLayer();
		this.addChild(this.statusLayer);

		this.timer = new egret.Timer(100,0);
		this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);



		//移除完GuildLayer之后回调一个函数，使计数开始
		this.addChild(new GuideLayer(()=>{
			this.timer.start();
		}));	

	}

	public timerFunc(){	
		this.statusLayer.updata();
		GameData.Instance.currentGameTime += 0.1;
		if(GameData.Instance.currentGameTime > GameData.Instance.gameTime){
			GameData.Instance.gameOver = true;
			if(GameData.Instance.gameOver){
				this.timer.stop();
				SceneControl.run(new OverScene());
			}
		}
		GameData.Instance.level = Math.floor(GameData.Instance.currentGameTime / 3);
		//元素控制
		GameData.Instance.dropSpeed = 40 + (GameData.Instance.level * 1);
		GameData.Instance.dropInterval-=0.002;
		GameData.Instance.currentInteval += 0.1;
		//GameData.Instance.dropInterval越来越小，与GameData.Instance.currentInteval越接近，执行的频率越来越高
		//所以越到后面掉落的元素越多
		if(GameData.Instance.dropInterval <= GameData.Instance.currentInteval){
			//生产掉落元素
			this.animationLayer.createElement();
			GameData.Instance.currentInteval=0;
		}
		this.animationLayer.change();	
	}
}