class Snake extends egret.DisplayObjectContainer{
	private snakeLength: number;//蛇的长度
	public snakeBody: Block[];//蛇的身体
	private snakeSpeed: number;//蛇的速度
	private floor: Floor;
	private direction: Direction;//蛇运动的方向
	private timer1: egret.Timer;//控制蛇的移动 
	private timer2: egret.Timer;//时间
	private score: number = 0;
	public foodBlock: Block;//食物
	public statusLayer: statusLayer;
	public constructor(floor : Floor) {
		super();
		this.floor = floor;
		this.snakeBody = [];
		this.snakeLength =  3;//蛇出生时的长度
		this.snakeSpeed  =  500;//初始化蛇的速度
		this.direction = Direction.right;//初始化原始运动方向
		this.statusLayer = new statusLayer();
	}
	//蛇出生
	public snakeBorn(){
		//初始化三节小蛇
		for(let i = this.snakeLength - 1; i >= 0 ; i--){
			this.snakeBody.push(this.floor.blocks[i]);
		}
		//遍历蛇的的身体数组，给蛇的身体着色
		this.snakeBody.forEach(
			value => {
				value.type = FLOOR.BODY;
				value.node.className =  value.type; 
			}
		)
		//生成食物
		this.food();
		//两个定时器，一个控制蛇的移动 。一个是时间
		this.timer1 = new egret.Timer(this.snakeSpeed,0);
		this.timer1.addEventListener(egret.TimerEvent.TIMER,this.snakeMove,this);
		this.timer1.start();
		this.statusLayer.timer1 = this.timer1;
		this.timer2 = new egret.Timer(1000,0);
		this.timer2.addEventListener(egret.TimerEvent.TIMER,this.statusInit,this);
		this.timer2.start();
		this.statusLayer.timer2 = this.timer2;
		this.keyBoardEvent();
	}
	//使蛇运动起来ß
	public snakeMove(){
		//蛇的速度随着时间的减少而变快
		this.snakeSpeed -= this.statusLayer.currentGameTime*4;
		//改变触发时间
		this.timer1.delay = this.snakeSpeed<=150 ? 150 : this.snakeSpeed ;
		let head = this.snakeBody[0];
		let tail = this.snakeBody[this.snakeBody.length - 1];
		let next = this.next(head,this.direction);// 获取下一个block
		//碰壁死亡和碰自身死亡
		if((!next)  || (next.type == FLOOR.BODY) || (next.type == FLOOR.WALL)){
			this.snakeDie();
			return;
		}
		//下一个方块与食物对的坐标是否一样，即当前食物就是当前蛇头
		if(next.position.x  == this.foodBlock.position.x && next.position.y  == this.foodBlock.position.y){
			this.eatFood(next);
		} 
		//蛇移动导致的数组变换
		for(let i = this.snakeBody.length - 1; i > 0; i--){
			this.snakeBody[i] = this.snakeBody[i - 1];
		}
		next.type = FLOOR.BODY;
		next.node.className = next.type;
		this.snakeBody[0] = next;//改变第一块的位置
		tail.type = FLOOR.SPACE;
		tail.node.className = tail.type;
		this.snakeBody.forEach(body => {
			body.type = FLOOR.BODY;
			body.node.className = body.type;
		})
	}
	//生成下一个方块
	public next(block:Block,direction: Direction){
		let x : number, y : number;
		switch(this.direction){
			case Direction.right:
				x = block.position.x + 1;
				y = block.position.y;
				break;
			case Direction.left:
				x = block.position.x - 1;
				y = block.position.y;
				break;
			case Direction.up:
				x = block.position.x ;
				y = block.position.y - 1;
				break;
			case Direction.down:
				x = block.position.x ;
				y = block.position.y + 1;
				break;			
		}
		//filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
		return this.floor.blocks.filter(block => {
			if( x === block.position.x && y === block.position.y){
				return true;
			}
		})[0];

	}
	//通过键盘控制蛇的移动
	public keyBoardEvent(){
		let keyEvent=(e: KeyboardEvent):void=>{
			let keyCode = e.keyCode;
			switch(keyCode){
				case Direction.right:
					if(this.direction !=  Direction.left){//通过这个条件语句使蛇不能反向而行
						this.direction = Direction.right
					};
					break;
				case Direction.left:
					if(this.direction !=  Direction.right){
						this.direction = Direction.left
					};
					break;
				case Direction.up:
					if(this.direction !=  Direction.down){
						this.direction = Direction.up
					};
					break;
				case Direction.down:
					if(this.direction !=  Direction.up){
						this.direction = Direction.down
					};
					break;			
			}
		}
		document.addEventListener('keydown',keyEvent,false);
	}
	//
	public eatFood(block: Block){
		this.snakeBody.push(block);
		this.score++;
		document.getElementsByClassName("score")[0].innerHTML = this.score.toString();
		//再一次生成食物
		this.food();
	}
	//蛇死亡
	public snakeDie(){
		this.timer1.stop();
		this.timer2.stop();
		alert("GameOver");	
	}

	//生成食物
	public food(){
		let x = Math.floor(Math.random()*18 + 1);
		let y = Math.floor(Math.random()*18 + 1);
		let pos : pos = {
			x : x,
			y : y
		}
		this.floor.blocks.forEach(floor=>{
		if(floor.position.x == pos.x && floor.position.y == pos.y){
			this.snakeBody.forEach(
				body => {
					//判断生成的食物不是蛇的身体
					if(pos.x !== body.position.x && pos.y !== body.position.y){
						floor.type = FLOOR.FOOD;
						floor.node.className = floor.type;
						this.foodBlock = floor;
					}
				}
			)
			}
		})
	}

	//初始化时间
	public statusInit(){
		this.statusLayer.init();
	}
}