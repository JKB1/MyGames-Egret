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
var RankLayer = (function (_super) {
    __extends(RankLayer, _super);
    function RankLayer() {
        var _this = _super.call(this) || this;
        _this.lock = true;
        _this.skinName = "resource/eui_skins/RankLayer.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    RankLayer.prototype.init = function () {
        this.IknowBtn.touchEnabled = true;
        this.IknowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.iKnowBtnFunc, this);
    };
    RankLayer.prototype.iKnowBtnFunc = function () {
        var _this = this;
        if (!this.lock) {
            return;
        }
        this.lock = false;
        egret.Tween.get(this).to({ y: -1008 }, 700, egret.Ease.backIn).call(function () {
            _this.parent.removeChild(_this);
        });
    };
    return RankLayer;
}(eui.Component));
__reflect(RankLayer.prototype, "RankLayer", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RankLayer.js.map