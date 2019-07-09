var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var AnimationLayer = (function (_super) {
    __extends(AnimationLayer, _super);
    function AnimationLayer() {
        var _this = _super.call(this) || this;
        _this.maxBombTime = 0.3;
        _this.bombTime = 0;
        //兔子的添加
        _this.hero = new HeroData();
        _this.elementPool = new Array();
        _this.hero.y = GameData.stageH - _this.hero.height;
        _this.hero.x = GameData.stageW / 2 - _this.hero.width / 2;
        _this.addChild(_this.hero);
        _this.statusLayer = new StatusLayer();
        //this.touchFunc();
        touchData.callFunc = _this.touchFunc.bind(_this);
        return _this;
        //this.hero.addEventListener(egret.Event.ADDED_TO_STAGE,this.touchFun,this);
    }
    AnimationLayer.prototype.touchFunc = function (evt) {
        if (touchData.touchType == "begin") {
            if (touchData.touchX >= this.hero.x && touchData.touchX <= this.hero.x + this.hero.display.width) {
                if (touchData.touchY >= this.hero.y && touchData.touchY <= this.hero.y + this.hero.display.height) {
                    this.touchObject = this.hero;
                    this.hero.playRunAnimation();
                }
            }
        }
        else if (touchData.touchType == "move" && this.touchObject) {
            var moveX = evt.stageX - (this.hero.width / 2);
            if (moveX >= -(this.hero.width / 2) && moveX <= GameData.stageW) {
                this.hero.x = moveX;
            }
        }
        else if ("end") {
            this.touchObject = null;
            //this.hero.stopAnimation();
            if (this.bombTime <= 0) {
                this.hero.playRunAnimation();
            }
        }
    };
    //生产掉落元素
    AnimationLayer.prototype.createElement = function () {
        var type = "";
        var random = Math.floor(Math.random() * 30);
        if (random < 5) {
            type = GameData.Instance.elementType[3];
        }
        else if (random < 25) {
            type = GameData.Instance.elementType[1];
        }
        else if (random < 26) {
            type = GameData.Instance.elementType[2];
        }
        else {
            type = GameData.Instance.elementType[0];
        }
        var ele = new ElementData(type);
        var x = Math.random() * 640;
        ele.dropspeed = GameData.Instance.dropSpeed;
        ele.x = x >= 640 - ele.width ? 640 - ele.width : x;
        ele.y = -ele.height;
        this.addChildAt(ele, 99);
        this.elementPool.push(ele);
    };
    //改变元素下落的速度
    AnimationLayer.prototype.change = function () {
        //爆炸时间控制
        if (this.bombTime > 0) {
            console.log(1);
            this.bombTime -= 0.1;
            if (this.bombTime <= 0) {
                this.hero.playRunAnimation();
                console.log(1);
            }
        }
        for (var i = 0; i < this.elementPool.length; i++) {
            var ele = this.elementPool[i];
            if (ele.y <= GameData.stageH + ele.height) {
                ele.y += ele.dropspeed;
                if (this.collision(this.hero, ele)) {
                    ele.y = -600;
                    this.collisionElementType(ele.type);
                    this.elementPool.splice(i, 1);
                }
            }
            else {
                this.elementPool.splice(i, 1);
            }
        }
    };
    //碰撞元素的类型分数
    AnimationLayer.prototype.collisionElementType = function (type) {
        if (type == "moonCake0_png") {
            Score.score += 10;
            this.hero.showScoreTip("+10");
        }
        else if (type == "moonCake1_png") {
            Score.score += 1;
            this.hero.showScoreTip("+1");
        }
        else if (type == "moonCake2_png") {
            Score.score += 5;
            this.hero.showScoreTip("+5");
        }
        else if (type == "bomb_png") {
            Score.score -= 20;
            Score.score = Score.score > 0 ? Score.score : 0;
            this.hero.showScoreTip("-20");
        }
        if (type == "bomb_png") {
            this.shakingScene();
            this.bombTime = this.maxBombTime;
            this.hero.playBombAnimation();
        }
    };
    //判断是否碰撞
    AnimationLayer.prototype.collision = function (hero, element) {
        var HeroLeft = hero.x, HeroRight = hero.x + hero.display.width, HeroTop = hero.y, HeroBottom = hero.y + hero.display.height;
        var elementLeft = element.x, elementRight = element.x + element.width, elementTop = element.y, elementBottom = element.y + element.height;
        if (HeroLeft > elementRight || HeroRight < elementLeft || HeroTop > elementBottom || HeroBottom < elementTop) {
            return false;
        }
        else {
            return true;
        }
    };
    //屏幕抖动特效
    AnimationLayer.prototype.shakingScene = function () {
        egret.Tween.get(SceneControl.getNowScene()).to({ x: 10, y: 10 }, 100)
            .to({ x: -10, y: -10 }, 100) //一段开始
            .to({ x: 10, y: 0 }, 100)
            .to({ x: 0, y: -10 }, 50)
            .to({ x: -10, y: 10 }, 100)
            .to({ x: 10, y: -10 }, 100)
            .to({ x: 0, y: 0 }, 100) //一段结束
            .to({ x: -10, y: -10 }, 100)
            .to({ x: 10, y: 0 }, 100)
            .to({ x: 0, y: -10 }, 50)
            .to({ x: -10, y: 10 }, 100)
            .to({ x: 10, y: -10 }, 100)
            .to({ x: 0, y: 0 }, 100);
    };
    return AnimationLayer;
}(egret.DisplayObjectContainer));
__reflect(AnimationLayer.prototype, "AnimationLayer");
//# sourceMappingURL=AnimationLayer.js.map