var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LineData = (function () {
    function LineData() {
    }
    //画横线
    LineData.drawLineToRow = function (lastObj, direction) {
        var line = new egret.Bitmap(RES.getRes("LinkL" + lastObj.id + "0_png"));
        //向右画横线
        if (direction.directionX == 1) {
            line.x = lastObj.x + lastObj.width / 3;
        }
        else if (direction.directionX == -1) {
            line.x = lastObj.x + lastObj.width / 6 - lastObj.width;
        }
        line.y = lastObj.y;
        return line;
    };
    //画竖线
    LineData.drawLineToCol = function (lastObj, direction) {
        var line = new egret.Bitmap(RES.getRes("LinkL" + lastObj.id + "1_png"));
        //向下画竖线
        if (direction.directionY == 1) {
            line.y = lastObj.y + line.height / 2;
        }
        else if (direction.directionY == -1) {
            line.y = lastObj.y - lastObj.height + lastObj.height / 6;
        }
        line.x = lastObj.x - lastObj.width / 7;
        return line;
    };
    //画右斜线
    LineData.drawLineToRightBias = function (lastObj, direction) {
        var line = new egret.Bitmap(RES.getRes("LinkL" + lastObj.id + "2_png"));
        if (direction.directionX == 1 && direction.directionY == 1) {
            line.x = lastObj.x + lastObj.width / 7;
            line.y = lastObj.y + lastObj.height / 7;
        }
        else if (direction.directionX == -1 && direction.directionY == -1) {
            line.x = lastObj.x - lastObj.width;
            line.y = lastObj.y - lastObj.height;
        }
        return line;
    };
    //画左斜线
    LineData.drawLineToLeftBias = function (lastObj, direction) {
        var line = new egret.Bitmap(RES.getRes("LinkL" + lastObj.id + "3_png"));
        if (direction.directionX == -1 && direction.directionY == 1) {
            line.x = lastObj.x - lastObj.width;
            line.y = lastObj.y + lastObj.height / 7;
        }
        else if (direction.directionX == 1 && direction.directionY == -1) {
            line.x = lastObj.x + lastObj.width / 7;
            line.y = lastObj.y - lastObj.height;
        }
        return line;
    };
    return LineData;
}());
__reflect(LineData.prototype, "LineData");
//# sourceMappingURL=LineData.js.map