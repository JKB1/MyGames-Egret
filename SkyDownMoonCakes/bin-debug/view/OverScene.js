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
var OverScene = (function (_super) {
    __extends(OverScene, _super);
    function OverScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/OverScene.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        _this.scoreLabel.text = Score.score.toString();
        return _this;
    }
    OverScene.prototype.init = function () {
        this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankBtnFunc, this);
        this.tryAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tryAgainFunc, this);
    };
    OverScene.prototype.rankBtnFunc = function () {
        this.addChild(new RankLayer());
    };
    OverScene.prototype.tryAgainFunc = function () {
        SceneControl.run(new ControllScene());
    };
    return OverScene;
}(eui.Component));
__reflect(OverScene.prototype, "OverScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=OverScene.js.map