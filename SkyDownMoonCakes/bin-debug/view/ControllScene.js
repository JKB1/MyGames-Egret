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
var ControllScene = (function (_super) {
    __extends(ControllScene, _super);
    function ControllScene() {
        var _this = _super.call(this) || this;
        //
        GameData.Instance.init();
        Score.score = 0;
        //触摸数据的初始化
        touchData.init();
        //背景层
        _this.backgroundLayer = new BackgroundLayer();
        _this.addChild(_this.backgroundLayer);
        //动画层
        _this.animationLayer = new AnimationLayer();
        _this.addChild(_this.animationLayer);
        // //触摸层数据的初始化
        _this.touchLayer = new TouchLayer();
        _this.addChild(_this.touchLayer);
        //我的得分
        // this.score = new ShowScore();
        // this.addChild(this.score);
        // this.score.show("k");
        _this.statusLayer = new StatusLayer();
        _this.addChild(_this.statusLayer);
        _this.timer = new egret.Timer(100, 0);
        _this.timer.addEventListener(egret.TimerEvent.TIMER, _this.timerFunc, _this);
        //移除完GuildLayer之后回调一个函数，使计数开始
        _this.addChild(new GuideLayer(function () {
            _this.timer.start();
        }));
        return _this;
    }
    ControllScene.prototype.timerFunc = function () {
        this.statusLayer.updata();
        GameData.Instance.currentGameTime += 0.1;
        if (GameData.Instance.currentGameTime > GameData.Instance.gameTime) {
            GameData.Instance.gameOver = true;
            if (GameData.Instance.gameOver) {
                this.timer.stop();
                SceneControl.run(new OverScene());
            }
        }
        GameData.Instance.level = Math.floor(GameData.Instance.currentGameTime / 3);
        //元素控制
        GameData.Instance.dropSpeed = 40 + (GameData.Instance.level * 1);
        GameData.Instance.dropInterval -= 0.002;
        GameData.Instance.currentInteval += 0.1;
        if (GameData.Instance.dropInterval <= GameData.Instance.currentInteval) {
            this.animationLayer.createElement();
            GameData.Instance.currentInteval = 0;
        }
        this.animationLayer.change();
    };
    return ControllScene;
}(egret.DisplayObjectContainer));
__reflect(ControllScene.prototype, "ControllScene");
//# sourceMappingURL=ControllScene.js.map