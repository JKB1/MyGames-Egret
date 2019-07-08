class AnimationLayer extends egret.DisplayObjectContainer {
	public type: number;
	public clickArray: Array<ElementData> = new Array();
	public mapTop: number = 50;  	//元素矩阵距离头部距离
	public mapLeft: number = 205; 	//元素矩阵距离左边距离
	public maxRow: number = 8;	//最大行数
	public maxCol: number = 6; //最大列数
	public obj: ElementData[][] = null;//存放行列的元素
	public lineArray: Array<egret.Bitmap> = new Array();//存放线的数组
	public isEnd: boolean = false;
	public backgroundLayer: BackgroundLayer = new BackgroundLayer();
	public score: number = 0;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this)
	}
	public init() {
		this.createElement();		
	}
	public createElement() {
		this.isEnd = false;
		this.obj = new Array(this.maxRow);
		for (var row = 0; row < this.maxRow; row++) {
			this.obj[row] = new Array(this.maxCol);
			for (var col = 0; col < this.maxCol; col++) {
				var ele = this.element(row, col);
				this.obj[row][col] = ele;
				this.addChildAt(this.obj[row][col], 5);
			}
		}
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveFunc, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.endFunc, this);
	}
	//生产元素
	public element(row:number,col:number):ElementData {
		this.type = Math.floor(Math.random() * 4);
		var ele: ElementData = new ElementData();
		var texture = RES.getRes("animal" + this.type + "_png");

		ele.x = this.calX(col);
		ele.y = this.calY(row);
		ele.id = this.type;
		ele.texture = texture;
		ele.anchorOffsetX = ele.width / 2;
		ele.anchorOffsetY = ele.height / 2;
		ele.row = row;
		ele.col = col;
		ele.touchEnabled = true;

		return ele;
	}

	public calX(col:number):number{
		return col * 90 + this.mapTop + 45;
	}
	public calY(row:number):number {
		return row * 90 + this.mapLeft + 45;
	}
	//思路: 先把第一次点击的加进去clickArray,然后判断下一个obj.id是不是与clickArray[0].id一样，一样的话再加进去clickArray
	public moveFunc(e: egret.TouchEvent) {
		var eleTarget: ElementData = e.target;//当前点击的对象
		var isExist: boolean = false;
		if (eleTarget.id == undefined) {		//对点击的目标对象的id进行判断
			return;
		}
		if (this.isSame(eleTarget) && this.isSide(eleTarget)) {
			eleTarget.texture = RES.getRes("animalD" + eleTarget.id + "_png");
			eleTarget.anchorOffsetX = eleTarget.width / 2;
			eleTarget.anchorOffsetY = eleTarget.height / 2;
			if (this.isExists(eleTarget)) {
				isExist = true;
			}
			if (!isExist) {
				this.clickArray.push(eleTarget);
				if (this.clickArray.length >= 2) {
					var direction:DirectionData = this.judgeDirection(eleTarget);
					var line;
					var lastObj:ElementData = this.clickArray[this.clickArray.length - 2];
					var rowDiff = Math.abs(lastObj.row - eleTarget.row);
					var colDiff = Math.abs(lastObj.col - eleTarget.col);
					//生成线
					if(rowDiff == 0 && colDiff == 1){//同行
						line = LineData.drawLineToRow(lastObj, direction);
					} else if (rowDiff == 1 && colDiff == 0){//同列
						line = LineData.drawLineToCol(lastObj, direction);
					} else if (rowDiff == 1 && colDiff == 1) {//斜
						if (eleTarget.row < lastObj.row && eleTarget.col < lastObj.col || eleTarget.row > lastObj.row && eleTarget.col > lastObj.col) { //右斜
							line = LineData.drawLineToRightBias(lastObj, direction);
						} else if(eleTarget.row > lastObj.row && eleTarget.col < lastObj.col||eleTarget.row < lastObj.row && eleTarget.col > lastObj.col){//左斜
							line = LineData.drawLineToLeftBias(lastObj, direction);
						}
					}
					this.lineArray.push(line);
					this.addChildAt(line,8);
					
				}
			} else if (isExist&&this.isNeedRevoke) {
				this.revoke();
			}
		}

		
	}
	//判断是否是相同元素（通过元素的id来判断）
	public isSame(obj:ElementData): boolean {
		
		if (this.clickArray.length == 0) {
			return true;
		}
		if (this.clickArray[0].id == obj.id) {
			return true;
		}
		return false;
	}
	//判断是否是相邻元素（根据行差值判断是不是相邻元素）
	public isSide(obj: ElementData): boolean{
		if (this.clickArray.length == 0) {
			return true;
		}

		var lastObj: ElementData = this.clickArray[this.clickArray.length - 1];
		//行差值
		var rowDiff = Math.abs(lastObj.row - obj.row);
		//列差值
		var colDiff = Math.abs(lastObj.col - obj.col);
		//根据行差值判断是不是相邻元素
		if (rowDiff == 1 && colDiff == 0 //同列
			|| rowDiff == 0 && colDiff == 1 //同行
			|| rowDiff == 1 && colDiff == 1) { //对角
			return true;
		}
		return false;
	}
	//判断当前的obj是否存在于clickArray数组
	public isExists(obj:ElementData):boolean {
		for (var i = 0; i < this.clickArray.length; i++){
			if (this.clickArray[i].row == obj.row && this.clickArray[i].col == obj.col) {
				return true;
			}
		}
		return false;
	}
	//判断线条的方向
	public judgeDirection(obj:ElementData): DirectionData{
		var lastSecondObj: ElementData = this.clickArray[this.clickArray.length - 2];
		var rowDiff = Math.abs(lastSecondObj.row - obj.row);
		var colDiff = Math.abs(lastSecondObj.col - obj.col);
		if (colDiff==0) { //同列的情况
			if (obj.row>lastSecondObj.row){ //下
				return new DirectionData(0, 1);
			} else { //上
				return new DirectionData(0, -1);		
			}
		}else if(rowDiff==0){ //同行的情况
			if (obj.col>lastSecondObj.col){ //右
				return new DirectionData(1, 0);
			} else { //左
				return new DirectionData(-1,0);				
			}
		}else if (rowDiff==1&&colDiff==1){ //斜向
			if (obj.row > lastSecondObj.row && obj.col > lastSecondObj.col) { //右下
				return new DirectionData(1, 1);
			} else if (obj.row > lastSecondObj.row && obj.col < lastSecondObj.col) { //左下
				return new DirectionData(-1, 1);
			} else if (obj.row < lastSecondObj.row && obj.col > lastSecondObj.col) { //右上
				return new DirectionData(1, -1);
			} else { //左上
				return new DirectionData(-1, -1);
			}
		} 
	} 
	//判断是否撤销连线
	public isNeedRevoke(obj:ElementData):boolean {
		if (this.clickArray.length < 2) {
			return false;
		}
		var lastSecondObj: ElementData = this.clickArray[this.clickArray.length - 2];
		if (lastSecondObj.row == obj.row && lastSecondObj.col == obj.col) {
			return true;
		}
		return false;
	}
	//撤销连线，恢复对象原始状态
	public revoke() {
		var lastObj: ElementData = this.clickArray[this.clickArray.length - 1];
		var lastLine: egret.Bitmap = this.lineArray[this.lineArray.length - 1];
		lastObj.texture = RES.getRes("animal" + lastObj.id + "_png");
		this.removeChild(lastLine);

		this.clickArray.pop();
		this.lineArray.pop();
	}
	public endFunc(e:egret.TouchEvent) {
		if (!this.isEnd) {
			this.clearElement();
		}
	}
	//移除连线元素和线条
	public clearElement() {
		var length = this.clickArray.length;
		this.addScore(length);
		for (var i = 0; i < this.clickArray.length; i++) {
			if (length < 3) {
				this.clickArray[i].texture = RES.getRes("animal" + this.clickArray[i].id + "_png");
			} else if (length >= 3) {
				this.removeChild(this.clickArray[i]);
				this.obj[this.clickArray[i].row][this.clickArray[i].col] = null;
			}
		}
		this.backgroundLayer.scoreLabel.text = this.score.toString();
		//移除线条
		for (var i = 0; i < this.lineArray.length; i++) {
			this.removeChild(this.lineArray[i]);
		}
		//清空数组
		this.lineArray = [];
		this.clickArray = [];

		this.dropData();
	}
	public dropData() {
		for (var col = 0; col < this.maxCol; col++){
			this.dropCol(col);
			this.dropNewCol(col);
		}
		
	}
	//旧元素滑落
	public dropCol(col: number) {
		//从下往上开始检测
		for (var row = this.maxRow - 1; row >= 0; row--){		
			var obj = this.obj[row][col];
			var isDrop: boolean = false;
			if (obj == null) {
				continue;
			}
			var objRow = obj.row;
			while(objRow < this.maxRow - 1 && this.obj[objRow + 1][col] == null) {
				isDrop = true;
				this.obj[objRow][col] = null;
				objRow++;
				obj.row = objRow;
				this.obj[objRow][col] = obj;
				var newY = this.calY(objRow);
			}
			if (isDrop) {
				this.dropAnimation(this.obj[objRow][col], newY);
			}
		}

		
	}
	//产生新的元素下落
	public dropNewCol(col: number) {
		
		for (var row = this.maxRow - 1; row >=0 ; row--){
			var obj = this.obj[row][col];
			var isDrop: boolean = false;
			if (obj != null) {
				continue;
			}
			//初始化新元素的起始位置
			var objRow = -1;
			var newObj: ElementData = this.element(row, col);
			newObj.y = this.calY(objRow);
			this.addChild(newObj);
			while (objRow < this.maxRow - 1 && this.obj[objRow + 1][col] == null) {
				if (objRow >= 0) {
					this.obj[objRow][col] = null;
				}
				isDrop = true;
				objRow++;
				newObj.row = objRow;
				this.obj[objRow][col] = newObj;
				var newY = this.calY(objRow);
			}
			if (isDrop) {
				this.dropAnimation(newObj, newY);
			}
		}


	}
	//元素下落动画
	public dropAnimation(obj:ElementData,y:number,callFunc?:any) {
		egret.Tween.get(obj).to({ y: y }, 500).call(() => {
			if (callFunc) {
				callFunc();
			}
		})
	}
	public addScore(len: number) {
		if (len < 8) {
			Score.score += len * 20;
		} else {
			Score.score += len * 40;
		}
		//this.backgroundLayer.scoreLabel.text = this.score.toString();
	}
}