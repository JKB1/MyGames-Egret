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
var statusLayer = (function (_super) {
    __extends(statusLayer, _super);
    function statusLayer() {
        var _this = _super.call(this) || this;
        _this.currentGameTime = 0;
        _this.gameTime = 0;
        _this.currentGameTime = 0;
        _this.gameTime = 30;
        document.getElementsByClassName("time")[0].innerHTML = _this.gameTime.toString();
        return _this;
    }
    statusLayer.prototype.init = function () {
        this.currentGameTime += 1;
        //时间到游戏结束
        if (this.currentGameTime > this.gameTime) {
            document.getElementsByClassName("time")[0].innerHTML = "0";
            this.timer1.stop();
            this.timer2.stop();
            alert("GameOver");
            return;
        }
        else {
            document.getElementsByClassName("time")[0].innerHTML = (this.gameTime - this.currentGameTime).toString();
        }
    };
    return statusLayer;
}(egret.DisplayObjectContainer));
__reflect(statusLayer.prototype, "statusLayer");
//# sourceMappingURL=statusLayer.js.map