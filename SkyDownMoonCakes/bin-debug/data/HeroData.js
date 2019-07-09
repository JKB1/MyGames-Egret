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
var HeroData = (function (_super) {
    __extends(HeroData, _super);
    function HeroData() {
        var _this = _super.call(this) || this;
        _this.showScore = 0;
        //添加人物图片
        _this.display = new egret.Bitmap(RES.getRes("heroStand_png"));
        _this.addChild(_this.display);
        //奔跑动画
        _this.runanimation = {
            texturl: [RES.getRes("heroRun0_png"), RES.getRes("heroRun1_png"), RES.getRes("heroRun2_png"), RES.getRes("heroRun3_png")],
            loop: true,
            interval: 0.1
        };
        //吃东西动画
        _this.eatanimation = {
            texturl: [RES.getRes("heroEat0_png"), RES.getRes("heroEat1_png"), RES.getRes("heroEat2_png"), RES.getRes("heroEat3_png")],
            loop: false,
            interval: 0.1
        };
        //this.display作为参数传给egret.Animation的构造函数，初始化egret.Animation的变量Bitmap，this.display即兔子站立的图片
        _this.animation = new egret.Animation(_this.display);
        //
        _this.showScoreTips = new ShowScoreTips();
        _this.showScoreTips.x = _this.width / 4;
        _this.addChild(_this.showScoreTips);
        return _this;
    }
    //奔跑动画
    HeroData.prototype.playRunAnimation = function () {
        this.animation.playAnimation(this.runanimation);
    };
    //爆炸动画
    HeroData.prototype.playBombAnimation = function () {
        this.stopAnimation();
        this.display.texture = RES.getRes("heroBomb_png");
    };
    //停止动画
    HeroData.prototype.stopAnimation = function () {
        this.animation.stopAnnimation();
    };
    //碰撞产生的分数
    HeroData.prototype.showScoreTip = function (str) {
        this.showScoreTips.show(str);
    };
    HeroData.prototype.collision = function () {
        var HeroLeft = this.x, HeroRight = this.x + this.display.width, HeroTop = this.y, HeroBottom = this.y + this.display.height;
    };
    return HeroData;
}(egret.Sprite));
__reflect(HeroData.prototype, "HeroData");
//# sourceMappingURL=HeroData.js.map