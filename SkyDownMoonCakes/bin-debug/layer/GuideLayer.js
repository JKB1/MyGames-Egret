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
var GuideLayer = (function (_super) {
    __extends(GuideLayer, _super);
    function GuideLayer(call) {
        var _this = _super.call(this) || this;
        _this.callFunc = call;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guideFunc, _this);
        return _this;
    }
    GuideLayer.prototype.guideFunc = function () {
        var _this = this;
        egret.Tween.get(this).to({ y: -1008 }, 700, egret.Ease.backIn).call(function () {
            if (_this.callFunc) {
                _this.callFunc();
            }
            _this.parent.removeChild(_this);
        });
    };
    return GuideLayer;
}(eui.Component));
__reflect(GuideLayer.prototype, "GuideLayer", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GuideLayer.js.map