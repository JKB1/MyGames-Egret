var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
        this.gameTime = 20;
        this.currentGameTime = 0;
        this.gameOver = false;
        this.gameTime = 20;
        this.currentGameTime = 0;
        this.gameOver = false;
    }
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