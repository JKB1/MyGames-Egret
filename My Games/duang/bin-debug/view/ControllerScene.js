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
var ControllerScene = (function (_super) {
    __extends(ControllerScene, _super);
    function ControllerScene() {
        var _this = _super.call(this) || this;
        _this.level = 1;
        //背景数据初始化
        _this.backgroundLayer = new BackgroundLayer();
        _this.addChild(_this.backgroundLayer);
        //添加对象
        _this.addChild(new AnimationLayer());
        _this.time = new egret.Timer(1000, 0);
        _this.addChild(new GuildLayer(function () {
            _this.initTime();
        }));
        return _this;
    }
    ControllerScene.prototype.initTime = function () {
        this.time.addEventListener(egret.TimerEvent.TIMER, this.timeFunc, this);
        this.time.start();
    };
    ControllerScene.prototype.timeFunc = function () {
        this.backgroundLayer.update();
        GameData.Instance.currentGameTime += 1;
        if (GameData.Instance.currentGameTime > GameData.Instance.gameTime) {
            GameData.Instance.gameOver = true;
            if (GameData.Instance.gameOver) {
                this.time.stop();
            }
        }
    };
    return ControllerScene;
}(egret.DisplayObjectContainer));
__reflect(ControllerScene.prototype, "ControllerScene");
//# sourceMappingURL=ControllerScene.js.map