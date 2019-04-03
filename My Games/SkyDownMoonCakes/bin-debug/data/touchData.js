var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var touchData = (function () {
    function touchData() {
    }
    touchData.init = function () {
        this.touchX = 0;
        this.touchY = 0;
        this.callFunc = null;
        this.touchType = "end";
    };
    touchData.touchX = 0;
    touchData.touchY = 0;
    touchData.touchType = "end";
    return touchData;
}());
__reflect(touchData.prototype, "touchData");
//# sourceMappingURL=touchData.js.map