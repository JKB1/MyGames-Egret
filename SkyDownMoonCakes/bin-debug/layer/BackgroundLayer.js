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
var BackgroundLayer = (function (_super) {
    __extends(BackgroundLayer, _super);
    function BackgroundLayer() {
        var _this = _super.call(this) || this;
        var bg = new egret.Bitmap(RES.getRes("playBg_png"));
        _this.addChild(bg);
        return _this;
    }
    return BackgroundLayer;
}(egret.DisplayObjectContainer));
__reflect(BackgroundLayer.prototype, "BackgroundLayer");
//# sourceMappingURL=BackgroundLayer.js.map