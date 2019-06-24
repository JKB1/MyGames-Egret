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
        _this.skinName = "resource/eui_skins/BackgroundLayer.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    BackgroundLayer.prototype.init = function () {
        //分数文本
        this.scoreLabel.size = 30;
        this.scoreLabel.textColor = 0xFFFFFF;
        this.scoreLabel.text = "0";
        this.scoreLabel.textAlign = "center";
        //时间文本
        this.timeLabel = new egret.TextField();
        this.timeLabel.size = 60;
        this.timeLabel.stroke = 2;
        this.timeLabel.strokeColor = 0xc96c31;
        this.timeLabel.textAlign = "center";
        this.timeLabel.anchorOffsetX = this.timeLabel.width / 2;
        this.timeLabel.anchorOffsetY = this.timeLabel.height / 2;
        this.timeLabel.x = this.time.x + this.time.width / 5;
        this.timeLabel.y = this.time.y + this.time.height / 6;
        this.timeLabel.text = "20";
        this.addChild(this.timeLabel);
        //分数文本
        this.targetScoreLabel.size = 30;
        this.targetScoreLabel.textColor = 0xFFFFFF;
        this.targetScoreLabel.text = "1000";
        this.targetScoreLabel.textAlign = "center";
    };
    BackgroundLayer.prototype.update = function () {
        var _this = this;
        var num = Math.round(GameData.Instance.gameTime - GameData.Instance.currentGameTime);
        this.scoreLabel.text = Score.score.toString();
        if (num <= 0) {
            this.timeLabel.text = "0" + num;
        }
        else {
            this.timeLabel.text = (num >= 10 ? num.toString() : "0" + num);
        }
        this.warn.visible = false;
        if (num >= 0 && num <= 5) {
            egret.Tween.get(this.warn).wait(500).call(function () {
                _this.warn.visible = true;
            });
        }
    };
    //下一关卡
    BackgroundLayer.prototype.nextLevel = function () {
    };
    return BackgroundLayer;
}(eui.Component));
__reflect(BackgroundLayer.prototype, "BackgroundLayer", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BackgroundLayer.js.map