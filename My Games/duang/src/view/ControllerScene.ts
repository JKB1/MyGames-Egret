class ControllerScene extends egret.DisplayObjectContainer{

	private backgroundLayer: BackgroundLayer;
	private guildLayer: GuildLayer;
	private time: egret.Timer;
	public level: number = 1;
	public constructor() {
		super();
		//背景数据初始化
		this.backgroundLayer = new BackgroundLayer();
		this.addChild(this.backgroundLayer);
		//添加对象
		this.addChild(new AnimationLayer());
		
		this.time = new egret.Timer(1000,0);
		this.addChild(new GuildLayer(()=>{
			this.initTime();
		}));


	}
	public initTime() {
		this.time.addEventListener(egret.TimerEvent.TIMER, this.timeFunc, this);
		this.time.start();
	}
	public timeFunc(){
		this.backgroundLayer.update();
		GameData.Instance.currentGameTime += 1;
		if(GameData.Instance.currentGameTime > GameData.Instance.gameTime){
			GameData.Instance.gameOver = true;
			if(GameData.Instance.gameOver){
				this.time.stop();
			}
		}
	}
	
}