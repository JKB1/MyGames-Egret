class ElementData extends egret.Bitmap{
	public dropspeed: number = 0;
	public type: string = "";
	public texture: egret.Texture
	public constructor(type: string) {
		super();
		this.type = type;
		this.texture = RES.getRes(this.type);
	}

	public collision(){
		var elementLeft = this.x,
			elementRight = this.x + this.width,
			elementTop = this.y,
			elementBottom = this.y + this.height;
	}
}