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
var RulerLayer = (function (_super) {
    __extends(RulerLayer, _super);
    function RulerLayer() {
        var _this = _super.call(this) || this;
        _this.lock = true;
        _this.skinName = "resource/eui_skins/RulerLayer.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    RulerLayer.prototype.init = function () {
        this.IknowBtn.touchEnabled = true;
        this.IknowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.IknBtFunc, this);
    };
    RulerLayer.prototype.IknBtFunc = function () {
        if (!this.lock) {
            return;
        }
        this.lock = false;
        this.parent.removeChild(this);
    };
    return RulerLayer;
}(eui.Component));
__reflect(RulerLayer.prototype, "RulerLayer", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RulerLayer.js.map