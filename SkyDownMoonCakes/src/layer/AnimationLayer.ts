class AnimationLayer extends egret.DisplayObjectContainer{

	private hero: HeroData;
	private touchLayer: TouchLayer;
	private touchObject: HeroData;
	public elementPool: Array<ElementData>;
	public statusLayer: StatusLayer;
	public element: ElementData;
	public bombTime: number;//爆炸时间
	public maxBombTime: number;//最大爆炸时间

	public constructor() {
		super();
		this.maxBombTime = 0.3;
		this.bombTime = 0;
		//兔子的添加
		this.hero = new HeroData();
		this.elementPool = new Array<ElementData>();
		this.hero.y = GameData.stageH - this.hero.height;
		this.hero.x = GameData.stageW/2 - this.hero.width/2;
		this.addChild(this.hero);
		this.statusLayer = new StatusLayer();
		//this.touchFunc();
		touchData.callFunc = this.touchFunc.bind(this);
		//this.hero.addEventListener(egret.Event.ADDED_TO_STAGE,this.touchFun,this);
	}
	private touchFunc(evt: egret.TouchEvent){
		if(touchData.touchType == "begin"){
			if (touchData.touchX >= this.hero.x && touchData.touchX <= this.hero.x + this.hero.display.width) {
				if (touchData.touchY >= this.hero.y && touchData.touchY <= this.hero.y + this.hero.display.height) {
						this.touchObject = this.hero;
						this.hero.playRunAnimation();
				}
			}

		}else if(touchData.touchType == "move" && this.touchObject){
				var moveX = evt.stageX - (this.hero.width/2);
				if(moveX >= -(this.hero.width/2) && moveX <= GameData.stageW ){
					this.hero.x = moveX;
				}
			}else if ("end"){
				this.touchObject = null;
				//this.hero.stopAnimation();
				if (this.bombTime <= 0) {
				this.hero.playRunAnimation();
			}
			}

	}

	//生产掉落元素
	public createElement(){
		var type: string = "";
		var random: number = Math.floor(Math.random()*30);
		if(random < 5){
			type = GameData.Instance.elementType[3];
		}else if(random < 25){
			type = GameData.Instance.elementType[1];
		}else if(random < 26){
			type = GameData.Instance.elementType[2];
		}else{
			type = GameData.Instance.elementType[0];
		}
		var ele: ElementData = new ElementData(type);
		var x: number = Math.random()*640;
		ele.dropspeed =  GameData.Instance.dropSpeed;
		ele.x = x >= 640 - ele.width ? 640 - ele.width : x;
		ele.y = -ele.height;
		this.addChildAt(ele,99);
		this.elementPool.push(ele);
	}
	//改变元素下落的速度
	public change(){

		//爆炸时间控制
		if (this.bombTime > 0) {
			console.log(1);
			this.bombTime -= 0.1;
			if (this.bombTime <= 0) {
					this.hero.playRunAnimation();
					console.log(1)
				}
		}

		for(var i = 0; i < this.elementPool.length; i++){
			var ele = this.elementPool[i];
			if(ele.y <= GameData.stageH + ele.height){
				ele.y += ele.dropspeed;
				if(this.collision(this.hero,ele)){
					ele.y = -600;
					this.collisionElementType(ele.type);
					this.elementPool.splice(i,1);
				}
			}else{
				this.elementPool.splice(i,1);
			}
			
		}

	}
	//碰撞元素的类型分数
	public collisionElementType(type: string){
		if(type == "moonCake0_png"){
			Score.score += 10;
			this.hero.showScoreTip("+10");
		}else if(type == "moonCake1_png"){
			Score.score += 1;
			this.hero.showScoreTip("+1");

		}else if(type == "moonCake2_png"){
			Score.score += 5;
			this.hero.showScoreTip("+5");

		}else if(type == "bomb_png"){
			
			Score.score -= 20;
			Score.score = Score.score > 0 ? Score.score : 0;
			this.hero.showScoreTip("-20");
		}

		if(type == "bomb_png"){
			this.shakingScene();
			this.bombTime = this.maxBombTime;
			this.hero.playBombAnimation();
		}

	}

	//判断是否碰撞
	public collision(hero: HeroData,element: ElementData){
		var HeroLeft = hero.x,
			HeroRight = hero.x + hero.display.width,
			HeroTop = hero.y,
			HeroBottom = hero.y + hero.display.height;
		var elementLeft = element.x,
			elementRight = element.x + element.width,
			elementTop = element.y,
			elementBottom = element.y + element.height;
		if(HeroLeft > elementRight || HeroRight < elementLeft || HeroTop > elementBottom || HeroBottom < elementTop){
			return false;
		}else{
			return true;
		}

	}

	//屏幕抖动特效
	public shakingScene() {
		egret.Tween.get(SceneControl.getNowScene()).to({ x: 10, y: 10 }, 100)
            .to({ x: -10, y: -10 }, 100)//一段开始
            .to({ x: 10, y: 0 }, 100)
            .to({ x: 0, y: -10 }, 50)
            .to({ x: -10, y: 10 }, 100)
            .to({ x: 10, y: -10 }, 100)
            .to({ x: 0, y: 0 }, 100)//一段结束
            .to({ x: -10, y: -10 }, 100)
            .to({ x: 10, y: 0 }, 100)
            .to({ x: 0, y: -10 }, 50)
            .to({ x: -10, y: 10 }, 100)
            .to({ x: 10, y: -10 }, 100)
            .to({ x: 0, y: 0 }, 100);
	}

}