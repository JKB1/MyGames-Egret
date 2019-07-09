class statusLayer extends egret.DisplayObjectContainer{
	public currentGameTime: number = 0;
	public gameTime: number = 0;
	public level: number;
	public timer1: egret.Timer;
	public timer2: egret.Timer;
	public constructor() {
		super();
		this.currentGameTime = 0;
		this.gameTime = 30;
		document.getElementsByClassName("time")[0].innerHTML = this.gameTime.toString();
	}

	public init(){
		this.currentGameTime+=1;
		//时间到游戏结束
		if(this.currentGameTime>this.gameTime){
			document.getElementsByClassName("time")[0].innerHTML="0";
			this.timer1.stop();
			this.timer2.stop();
			alert("GameOver")
			return;
		}else{
			document.getElementsByClassName("time")[0].innerHTML = (this.gameTime - this.currentGameTime).toString();
		}
	}
}