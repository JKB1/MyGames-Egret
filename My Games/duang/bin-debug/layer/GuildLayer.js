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
var GuildLayer = (function (_super) {
    __extends(GuildLayer, _super);
    function GuildLayer(callFunc) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/GuildLayer.exml";
        _this.callFunc = callFunc;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.init, _this);
        return _this;
    }
    GuildLayer.prototype.init = function () {
        this.alpha = 0;
        if (this.callFunc) {
            this.callFunc();
        }
        this.parent.removeChild(this);
    };
    return GuildLayer;
}(eui.Component));
__reflect(GuildLayer.prototype, "GuildLayer", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GuildLayer.js.map