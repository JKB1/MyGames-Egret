class GameData {

	public gameTime: number = 0;//游戏总时长
	public currentGameTime: number = 0;
	private static gameDataInstance:GameData;
	public gameOver: boolean = false;
	public dropSpeed: number = 0;//掉落的速度
	//public dropTime: number = 0;
	public level: number = 0;
	public elementType: Array<string> = ["moonCake0_png", "moonCake1_png", "moonCake2_png", "bomb_png"];
	public dropInterval: number = 0;//游戏当前出现元素间隔时长
	public currentInteval: number = 0;

	public init(){
		this.gameTime = 10;
		this.currentGameTime = 0;
		this.gameOver = false;
		this.dropSpeed = 7;
		//this.dropTime = 0.7;
		this.level = 0;
		this.dropInterval = 0.7;
	}

	//单例
	public static get Instance():GameData{
		if(!this.gameDataInstance){
			this.gameDataInstance = new GameData()
		}
		return this.gameDataInstance;
	}


	//获取舞台宽高
	public static get stageH(): number{
		return egret.MainContext.instance.stage.stageHeight;
	}

	public static get stageW(): number{
		return egret.MainContext.instance.stage.stageWidth;
	}
}