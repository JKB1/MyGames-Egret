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
var TouchLayer = (function (_super) {
    __extends(TouchLayer, _super);
    function TouchLayer() {
        var _this = _super.call(this) || this;
        _this.graphics.beginFill(0x000000);
        _this.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
        _this.graphics.endFill();
        _this.alpha = 0;
        _this.touchEnabled = true;
        _this.touchChildren = true;
        //当用户第一次触摸启用触摸的设备时（例如，用手指触摸配有触摸屏的移动电话或平板电脑）触发
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.beginFunc, _this);
        //当用户触碰设备并移动时进行触发，而且会连续触发，直到接触点被删除
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.moveFunc, _this);
        //当用户移除与启用触摸的设备的接触时（例如，将手指从配有触摸屏的移动电话或平板电脑上抬起）触发
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.endFunc, _this);
        return _this;
    }
    TouchLayer.prototype.beginFunc = function (evt) {
        touchData.touchX = evt.stageX;
        touchData.touchY = evt.stageY;
        touchData.touchType = "begin";
        if (touchData.callFunc) {
            touchData.callFunc(evt);
        }
    };
    ;
    TouchLayer.prototype.moveFunc = function (evt) {
        touchData.touchType = "move";
        touchData.touchX = evt.stageX;
        touchData.touchY = evt.stageY;
        if (touchData.callFunc) {
            touchData.callFunc(evt);
        }
    };
    ;
    TouchLayer.prototype.endFunc = function (evt) {
        touchData.touchType = "end";
        touchData.touchX = evt.stageX;
        touchData.touchY = evt.stageY;
        if (touchData.callFunc) {
            touchData.callFunc(evt);
        }
    };
    ;
    return TouchLayer;
}(egret.Sprite));
__reflect(TouchLayer.prototype, "TouchLayer");
//# sourceMappingURL=TouchLayer.js.map