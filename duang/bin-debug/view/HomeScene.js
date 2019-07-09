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
var HomeScene = (function (_super) {
    __extends(HomeScene, _super);
    function HomeScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/HomeScene.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    HomeScene.prototype.init = function () {
        this.addChild(new FollowWeChat());
        this.playAnimation();
        this.playBtn.touchEnabled = true;
        this.rulerBtn.touchEnabled = true;
        this.rankBtn.touchEnabled = true;
        this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playGame, this);
        this.rulerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ruleBtn, this);
        this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingBtn, this);
    };
    //开始页面动画
    HomeScene.prototype.playAnimation = function () {
        //blue动画
        egret.Tween.get(this.blue, { loop: true }).to({ y: 920 - 10 }, 100)
            .to({ y: 920 - 20 }, 100).to({ y: 920 - 30 }, 100).to({ y: 920 - 40 }, 100)
            .to({ y: 920 - 50 }, 100).to({ y: 920 - 60 }, 100).to({ y: 920 - 70 }, 100)
            .to({ y: 920 - 60 }, 100).to({ y: 920 - 50 }, 100).to({ y: 920 - 40 }, 100)
            .to({ y: 920 - 30 }, 100).to({ y: 920 - 20 }, 100).to({ y: 920 - 10 }, 100)
            .to({ y: 920 }, 100);
        //pink动画
        egret.Tween.get(this.pink, { loop: true }).to({ y: 910 - 10 }, 100)
            .to({ y: 910 - 20 }, 100).to({ y: 910 - 30 }, 100).to({ y: 910 - 40 }, 100)
            .to({ y: 910 - 50 }, 100).to({ y: 910 - 40 }, 100).to({ y: 910 - 30 }, 100)
            .to({ y: 910 - 20 }, 100).to({ y: 910 - 10 }, 100).to({ y: 910 }, 100);
        //yellow动画
        egret.Tween.get(this.yellow, { loop: true }).to({ y: 918 - 10 }, 100)
            .to({ y: 918 - 20 }, 100).to({ y: 918 - 30 }, 100).to({ y: 918 - 40 }, 100)
            .to({ y: 918 - 50 }, 100).to({ y: 918 - 60 }, 100).to({ y: 918 - 50 }, 100)
            .to({ y: 918 - 40 }, 100).to({ y: 918 - 30 }, 100).to({ y: 918 - 20 }, 100)
            .to({ y: 918 - 10 }, 100).to({ y: 918 }, 100);
    };
    //开始游戏
    HomeScene.prototype.playGame = function () {
        SceneControl.run(new ControllerScene());
    };
    //规则说明
    HomeScene.prototype.ruleBtn = function () {
        this.addChild(new rulerLayer());
    };
    //排名
    HomeScene.prototype.rankingBtn = function () {
    };
    return HomeScene;
}(eui.Component));
__reflect(HomeScene.prototype, "HomeScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HomeScene.js.map