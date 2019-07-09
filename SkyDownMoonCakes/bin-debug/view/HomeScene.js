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
        _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    HomeScene.prototype.init = function () {
        //微信层掉下来
        this.addChild(new FollowWeChat());
        //开始页面动画
        this.playAnimation();
        this.playBtn.touchEnabled = true;
        this.rulerBtn.touchEnabled = true;
        this.rankBtn.touchEnabled = true;
        //规则层
        this.rulerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rulerBtFunc, this);
        this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankBtFunc, this);
        this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playBtFunc, this);
    };
    //开始页面动画
    HomeScene.prototype.playAnimation = function () {
        //灯笼旋转
        var lanternLeftX = this.lanternLeft.x, lanternLeftY = this.lanternLeft.y, lanternMiddleX = this.lanternMiddle.x, lanternMiddleY = this.lanternMiddle.y, lanternRightX = this.lanternRight.x, lanternRightY = this.lanternRight.y;
        egret.Tween.get(this.lanternLeft, { loop: true }).to({ rotation: 5, x: lanternLeftX + 5, y: lanternLeftY + 5 }, 700)
            .to({ rotation: 0, x: lanternLeftX, y: lanternLeftY }, 700)
            .to({ rotation: -5, x: lanternLeftX - 5, y: lanternLeftY + 5 }, 700)
            .to({ rotation: 0, x: lanternLeftX, y: lanternLeftY }, 700);
        egret.Tween.get(this.lanternMiddle, { loop: true }).to({ rotation: 5, x: lanternMiddleX + 5, y: lanternMiddleY + 5 }, 650)
            .to({ rotation: 0, x: lanternMiddleX, y: lanternMiddleY }, 650)
            .to({ rotation: -5, x: lanternMiddleX - 5, y: lanternMiddleY + 5 }, 650)
            .to({ rotation: 0, x: lanternMiddleX, y: lanternMiddleY }, 650);
        egret.Tween.get(this.lanternRight, { loop: true }).to({ rotation: 5, x: lanternRightX + 5, y: lanternRightY + 5 }, 600)
            .to({ rotation: 0, x: lanternRightX, y: lanternRightY }, 600)
            .to({ rotation: -5, x: lanternRightX - 5, y: lanternRightY + 5 }, 600)
            .to({ rotation: 0, x: lanternRightX, y: lanternRightY }, 600);
        //月亮发光动画
        egret.Tween.get(this.moonLight, { loop: true }).to({ scaleX: 0.7, scaleY: 0.7 }, 1800)
            .to({ scaleX: 1, scaleY: 1 }, 1800);
        //兔子摇船动画
        egret.Tween.get(this.rabbit, { loop: true }).to({ x: 189 + 5, y: 684 + 2.5 }, 500)
            .to({ x: 189 + 10, y: 684 + 5 }, 500)
            .to({ x: 189 + 15, y: 684 + 2.5 }, 500)
            .to({ x: 189 + 20, y: 684 + 0 }, 500)
            .to({ x: 189 + 15, y: 684 - 2.5 }, 500)
            .to({ x: 189 + 10, y: 684 - 5 }, 500)
            .to({ x: 189 + 5, y: 684 - 2.5 }, 500)
            .to({ x: 189, y: 684 }, 500);
    };
    //规则层
    HomeScene.prototype.rulerBtFunc = function () {
        this.addChild(new RulerLayer());
    };
    //排名层
    HomeScene.prototype.rankBtFunc = function () {
        this.addChild(new RankLayer());
    };
    //游戏开始
    HomeScene.prototype.playBtFunc = function () {
        SceneControl.run(new ControllScene());
    };
    return HomeScene;
}(eui.Component));
__reflect(HomeScene.prototype, "HomeScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HomeScene.js.map