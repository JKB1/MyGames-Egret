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
var egret;
(function (egret) {
    var Animation = (function (_super) {
        __extends(Animation, _super);
        function Animation(Bitmap) {
            var _this = _super.call(this) || this;
            _this.initBaseData();
            _this.bitMap = Bitmap;
            //获取当前帧速率
            _this.frameRate = egret.MainContext.instance.stage.frameRate;
            return _this;
        }
        Animation.prototype.initBaseData = function () {
            this.texturlLength = 0;
            this.currentTexturlIndex = 0;
            this.interval = 0.3;
            this.loop = false;
            this.timeRecord = 0;
        };
        //播放动画
        Animation.prototype.playAnimation = function (obj) {
            this.initBaseData();
            this.batchTexturl = obj.texturl;
            this.bitMap.texture = obj.texturl[0];
            this.loop = obj.loop;
            this.interval = obj.interval * 1000;
            this.texturlLength = this.batchTexturl.length;
            this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
        };
        //更新数据
        Animation.prototype.update = function () {
            this.timeRecord += 1000 / this.frameRate;
            if (this.timeRecord >= this.interval) {
                this.timeRecord = 0;
                this.currentTexturlIndex++;
                if (this.currentTexturlIndex >= this.texturlLength) {
                    if (this.loop) {
                        this.currentTexturlIndex = 0;
                    }
                    else {
                        this.stopAnnimation();
                        return;
                    }
                }
                this.bitMap.texture = this.batchTexturl[this.currentTexturlIndex];
            }
        };
        Animation.prototype.stopAnnimation = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.update, this);
            this.currentTexturlIndex = 0;
            this.timeRecord = 0;
        };
        return Animation;
    }(egret.DisplayObjectContainer));
    egret.Animation = Animation;
    __reflect(Animation.prototype, "egret.Animation");
})(egret || (egret = {}));
//# sourceMappingURL=Animation.js.map