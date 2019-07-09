var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DirectionData = (function () {
    function DirectionData(x, y) {
        this.directionX = x;
        this.directionY = y;
    }
    return DirectionData;
}());
__reflect(DirectionData.prototype, "DirectionData");
//# sourceMappingURL=DirectionData.js.map