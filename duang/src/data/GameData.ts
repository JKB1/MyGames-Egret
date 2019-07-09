class GameData {

	public gameTime: number = 20;
	public currentGameTime: number = 0;
	public static gameDataInstance: GameData;
	public gameOver: boolean = false;
	public constructor() {
		this.gameTime = 20;
		this.currentGameTime = 0;
		this.gameOver = false;
	}

	//单例
	public static get Instance():GameData{
		if(!this.gameDataInstance){
			this.gameDataInstance = new GameData();
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