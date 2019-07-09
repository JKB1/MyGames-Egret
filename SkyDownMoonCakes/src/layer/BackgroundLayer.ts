class BackgroundLayer extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		var bg = new egret.Bitmap(RES.getRes("playBg_png"));
		this.addChild(bg);

	}
}