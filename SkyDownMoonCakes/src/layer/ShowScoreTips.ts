class ShowScoreTips extends egret.DisplayObjectContainer{
	public constructor() {
		super();
	}

	public show(str: string){
		var scoreTips: egret.TextField = new egret.TextField();
		scoreTips.text = str;
		scoreTips.textColor = 0xffffff;
        scoreTips.anchorOffsetX = scoreTips.width / 2;
        scoreTips.size = 80;
		scoreTips.stroke = 3;
		scoreTips.strokeColor = 0xd6661a;
        this.addChild(scoreTips);
		egret.Tween.get(scoreTips).to({y : -100, alpha : 0 },800).call(()=>{
			this.removeChild(scoreTips);
		})
	}
}