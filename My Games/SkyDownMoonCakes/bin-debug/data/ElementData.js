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
var ElementData = (function (_super) {
    __extends(ElementData, _super);
    function ElementData(type) {
        var _this = _super.call(this) || this;
        _this.dropspeed = 0;
        _this.type = "";
        _this.type = type;
        _this.texture = RES.getRes(_this.type);
        return _this;
    }
    ElementData.prototype.collision = function () {
        var elementLeft = this.x, elementRight = this.x + this.width, elementTop = this.y, elementBottom = this.y + this.height;
    };
    return ElementData;
}(egret.Bitmap));
__reflect(ElementData.prototype, "ElementData");
//# sourceMappingURL=ElementData.js.map