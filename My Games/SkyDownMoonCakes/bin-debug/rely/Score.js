var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Score = (function () {
    function Score() {
    }
    Score.score = 0; //游戏分数
    return Score;
}());
__reflect(Score.prototype, "Score");
//# sourceMappingURL=Score.js.map