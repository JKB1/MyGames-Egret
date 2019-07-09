class LineData{
	public constructor() {
	}
	//画横线
	public static drawLineToRow(lastObj:ElementData,direction:DirectionData):egret.Bitmap{
		var line:egret.Bitmap = new egret.Bitmap(RES.getRes("LinkL" + lastObj.id + "0_png"));
		//向右画横线
		if (direction.directionX == 1) {
			line.x = lastObj.x + lastObj.width/3;
		}else if(direction.directionX==-1){//向左画横线
			line.x = lastObj.x + lastObj.width / 6 - lastObj.width;
		}
		line.y = lastObj.y;
		return line;
	}
	//画竖线
	public static drawLineToCol(lastObj:ElementData,direction:DirectionData):egret.Bitmap{
		var line:egret.Bitmap = new egret.Bitmap(RES.getRes("LinkL" + lastObj.id + "1_png"));
		//向下画竖线
		if (direction.directionY == 1) {
			line.y = lastObj.y + line.height/2;
		}else if(direction.directionY==-1){//向上划竖线
			line.y = lastObj.y - lastObj.height + lastObj.height / 6;
		}
		line.x = lastObj.x-lastObj.width/7;
		return line;
	}
	//画右斜线
	public static drawLineToRightBias(lastObj: ElementData, direction: DirectionData): egret.Bitmap{
		var line:egret.Bitmap = new egret.Bitmap(RES.getRes("LinkL" + lastObj.id + "2_png"));
		if (direction.directionX == 1 && direction.directionY == 1) {//向右下画斜线
			line.x = lastObj.x + lastObj.width/7;
			line.y = lastObj.y + lastObj.height/7;
		} else if(direction.directionX==-1&&direction.directionY==-1){//向左上画斜线
			line.x = lastObj.x - lastObj.width;
			line.y = lastObj.y - lastObj.height;
		}
		return line;
	}
	//画左斜线
	public static drawLineToLeftBias(lastObj: ElementData, direction: DirectionData): egret.Bitmap{
		var line:egret.Bitmap = new egret.Bitmap(RES.getRes("LinkL" + lastObj.id + "3_png"));
		if (direction.directionX == -1 && direction.directionY == 1) {//向左下画斜线
			line.x = lastObj.x - lastObj.width;
			line.y = lastObj.y + lastObj.height/7;
		} else if(direction.directionX==1&&direction.directionY==-1){//向右上画斜线
			line.x = lastObj.x + lastObj.width/7;
			line.y = lastObj.y - lastObj.height;
		}
		return line;
	}
	
}