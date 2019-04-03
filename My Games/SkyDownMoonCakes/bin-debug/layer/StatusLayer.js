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
var StatusLayer = (function (_super) {
    __extends(StatusLayer, _super);
    function StatusLayer() {
        var _this = _super.call(this) || this;
        //得分图片
        var scoreImg = new egret.Bitmap(RES.getRes("pScoreText_png"));
        scoreImg.x = 20;
        scoreImg.y = 55;
        _this.addChild(scoreImg);
        //得分标签
        _this.scoreLabel = new egret.TextField();
        //this.score = new ShowScore();
        //this.scoreLabel.text =  Score.score.toString();
        _this.scoreLabel.size = 40;
        _this.scoreLabel.textAlign = "center";
        _this.scoreLabel.x = scoreImg.x + scoreImg.width + 3;
        _this.scoreLabel.y = scoreImg.y;
        _this.scoreLabel.stroke = 2;
        // this.scoreLabel.strokeColor = 0xd6661a;
        _this.scoreLabel.strokeColor = 0xc96c31;
        _this.addChild(_this.scoreLabel);
        //时间图片
        var timeBorderImg = new egret.Bitmap(RES.getRes("pTimeBorder_png"));
        timeBorderImg.x = GameData.stageW - timeBorderImg.width - 20;
        timeBorderImg.y = 20;
        _this.addChild(timeBorderImg);
        //时间标签
        //当设置一个显示对象的坐标位置时,会以锚点为参照改变显示对象的绘图位置。同时,锚点相对于显示对象的位置也是可以改变的。
        //锚点，养成先设置 anchorOffsetX/Y ，再设置X/Y的习惯
        _this.timeLabel = new egret.TextField();
        _this.timeLabel.size = 33;
        _this.timeLabel.text = (GameData.Instance.gameTime - GameData.Instance.currentGameTime).toString();
        _this.timeLabel.anchorOffsetX = _this.timeLabel.width / 2;
        _this.timeLabel.anchorOffsetY = _this.timeLabel.height / 2;
        _this.timeLabel.x = timeBorderImg.x + timeBorderImg.width / 2;
        _this.timeLabel.y = timeBorderImg.y + timeBorderImg.height / 2;
        _this.addChild(_this.timeLabel);
        return _this;
    }
    //更新数据
    StatusLayer.prototype.updata = function () {
        var numb = Math.round(GameData.Instance.gameTime - GameData.Instance.currentGameTime);
        this.timeLabel.text = (numb < 0 ? 0 : numb) + "s";
        this.timeLabel.anchorOffsetX = this.timeLabel.width / 2;
        this.timeLabel.anchorOffsetY = this.timeLabel.height / 2;
        this.scoreLabel.text = Score.score.toString();
    };
    return StatusLayer;
}(egret.DisplayObjectContainer));
__reflect(StatusLayer.prototype, "StatusLayer");
//# sourceMappingURL=StatusLayer.js.map