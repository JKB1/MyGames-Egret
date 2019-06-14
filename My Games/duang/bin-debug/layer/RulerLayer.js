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
var rulerLayer = (function (_super) {
    __extends(rulerLayer, _super);
    function rulerLayer() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/rulerLayer.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    rulerLayer.prototype.init = function () {
        this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBtn, this);
    };
    rulerLayer.prototype.closeBtn = function () {
        this.alpha = 0;
        this.parent.removeChild(this);
    };
    return rulerLayer;
}(eui.Component));
__reflect(rulerLayer.prototype, "rulerLayer", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RulerLayer.js.map