class touchData {
	public static touchX: number = 0;
	public static touchY: number = 0; 
	public static callFunc: any;
	public static touchType : string = "end";
	public static init():void{
		this.touchX = 0;
		this.touchY = 0;
		this.callFunc = null;
		this.touchType = "end";
	}
}