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
var ShowScoreTips = (function (_super) {
    __extends(ShowScoreTips, _super);
    function ShowScoreTips() {
        return _super.call(this) || this;
    }
    ShowScoreTips.prototype.show = function (str) {
        var _this = this;
        var scoreTips = new egret.TextField();
        scoreTips.text = str;
        scoreTips.textColor = 0xffffff;
        scoreTips.anchorOffsetX = scoreTips.width / 2;
        scoreTips.size = 80;
        scoreTips.stroke = 3;
        scoreTips.strokeColor = 0xd6661a;
        this.addChild(scoreTips);
        egret.Tween.get(scoreTips).to({ y: -100, alpha: 0 }, 800).call(function () {
            _this.removeChild(scoreTips);
        });
    };
    return ShowScoreTips;
}(egret.DisplayObjectContainer));
__reflect(ShowScoreTips.prototype, "ShowScoreTips");
//# sourceMappingURL=ShowScoreTips.js.map