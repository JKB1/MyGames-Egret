class BackgroundLayer extends eui.Component implements  eui.UIComponent {

	public time:eui.Image;
	public score:eui.Image;
	public scoreLabel: eui.Label;
	public timeLabel: egret.TextField;
	public targetScoreLabel: eui.Label;
	public warn:eui.Image;


	public constructor() {
		super();
		this.skinName = "resource/eui_skins/BackgroundLayer.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
	}

	public init(){
		//分数文本
		this.scoreLabel.size = 30;
		this.scoreLabel.textColor = 0xFFFFFF;
		this.scoreLabel.text = "0";
		this.scoreLabel.textAlign = "center"
		//时间文本
		this.timeLabel = new egret.TextField();
		this.timeLabel.size = 60;
		this.timeLabel.stroke = 2;
		this.timeLabel.strokeColor = 0xc96c31;
		this.timeLabel.textAlign = "center";
		this.timeLabel.anchorOffsetX =  this.timeLabel.width/2;
		this.timeLabel.anchorOffsetY = this.timeLabel.height/2;
		this.timeLabel.x = this.time.x + this.time.width/5;
		this.timeLabel.y = this.time.y + this.time.height/6;
		this.timeLabel.text = "20";
		this.addChild(this.timeLabel);

		//分数文本
		this.targetScoreLabel.size = 30;
		this.targetScoreLabel.textColor = 0xFFFFFF;
		this.targetScoreLabel.text = "1000";
		this.targetScoreLabel.textAlign = "center";
	}

	public update(){
		var num = Math.round(GameData.Instance.gameTime - GameData.Instance.currentGameTime);
		this.scoreLabel.text = Score.score.toString();
		if(num <= 0){
			this.timeLabel.text = "0" + num;
		}else{
			this.timeLabel.text = (num >= 10 ? num.toString() : "0" + num);
		}
		this.warn.visible = false;
		if (num>=0&&num <= 5) {
			egret.Tween.get(this.warn).wait(500).call(()=> {
				this.warn.visible = true;
			})
		}
	}
	//下一关卡
	public nextLevel() {
		
	}
}