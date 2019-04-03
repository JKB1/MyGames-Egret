class StatusLayer extends egret.DisplayObjectContainer{

	public scoreLabel: egret.TextField;
	private timeLabel: egret.TextField;
	public constructor() {
		super();


		//得分图片
		var scoreImg: egret.Bitmap = new egret.Bitmap(RES.getRes("pScoreText_png"));
		scoreImg.x = 20;
		scoreImg.y = 55;
		this.addChild(scoreImg);
		//得分标签
		this.scoreLabel = new egret.TextField();
		//this.score = new ShowScore();
		//this.scoreLabel.text =  Score.score.toString();
		this.scoreLabel.size = 40;
		this.scoreLabel.textAlign = "center";
		this.scoreLabel.x = scoreImg.x + scoreImg.width + 3;
		this.scoreLabel.y = scoreImg.y;
		this.scoreLabel.stroke = 2;
		// this.scoreLabel.strokeColor = 0xd6661a;
		this.scoreLabel.strokeColor = 0xc96c31;
		this.addChild(this.scoreLabel);


		//时间图片
		var timeBorderImg: egret.Bitmap = new egret.Bitmap(RES.getRes("pTimeBorder_png"));
		timeBorderImg.x = GameData.stageW - timeBorderImg.width - 20;
		timeBorderImg.y = 20;
		this.addChild(timeBorderImg);
		//时间标签
		//当设置一个显示对象的坐标位置时,会以锚点为参照改变显示对象的绘图位置。同时,锚点相对于显示对象的位置也是可以改变的。
		//锚点，养成先设置 anchorOffsetX/Y ，再设置X/Y的习惯
		this.timeLabel = new egret.TextField();
		this.timeLabel.size = 33;
		this.timeLabel.text = (GameData.Instance.gameTime - GameData.Instance.currentGameTime).toString();
		this.timeLabel.anchorOffsetX = this.timeLabel.width/2;
		this.timeLabel.anchorOffsetY = this.timeLabel.height/2;
		this.timeLabel.x = timeBorderImg.x + timeBorderImg.width/2;
		this.timeLabel.y = timeBorderImg.y + timeBorderImg.height/2;
		this.addChild(this.timeLabel);
	}
	//更新数据
	public updata(){
		var numb = Math.round(GameData.Instance.gameTime - GameData.Instance.currentGameTime);
		this.timeLabel.text = (numb < 0 ? 0 : numb )+ "s";
		this.timeLabel.anchorOffsetX = this.timeLabel.width/2;
		this.timeLabel.anchorOffsetY = this.timeLabel.height/2;
		this.scoreLabel.text = Score.score.toString();
		
	}

}