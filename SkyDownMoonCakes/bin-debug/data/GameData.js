var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
        this.gameTime = 0; //游戏总时长
        this.currentGameTime = 0;
        this.gameOver = false;
        this.dropSpeed = 0; //掉落的速度
        //public dropTime: number = 0;
        this.level = 0;
        this.elementType = ["moonCake0_png", "moonCake1_png", "moonCake2_png", "bomb_png"];
        this.dropInterval = 0; //游戏当前出现元素间隔时长
        this.currentInteval = 0;
    }
    GameData.prototype.init = function () {
        this.gameTime = 10;
        this.currentGameTime = 0;
        this.gameOver = false;
        this.dropSpeed = 7;
        //this.dropTime = 0.7;
        this.level = 0;
        this.dropInterval = 0.7;
    };
    Object.defineProperty(GameData, "Instance", {
        //单例
        get: function () {
            if (!this.gameDataInstance) {
                this.gameDataInstance = new GameData();
            }
            return this.gameDataInstance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData, "stageH", {
        //获取舞台宽高
        get: function () {
            return egret.MainContext.instance.stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameData, "stageW", {
        get: function () {
            return egret.MainContext.instance.stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map