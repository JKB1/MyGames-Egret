var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Floor = (function () {
    function Floor() {
        this.table = document.createElement('table');
        this.parents = document.body;
        this.row = 20; //最大行
        this.col = 20; //最大列
        this.blocks = [];
        this.walls = []; //墙
    }
    //绘制地图
    Floor.prototype.init = function () {
        var x, y;
        for (y = 0; y < this.row; y++) {
            var tr = this.table.insertRow(-1);
            for (x = 0; x < this.col; x++) {
                var td = tr.insertCell(-1);
                //外围绘制成墙
                if (x == 0 || y == 0 || y == this.row - 1 || x == this.col - 1) {
                    td.className = FLOOR.WALL;
                    this.walls.push({
                        node: td,
                        position: { x: x, y: y },
                        type: FLOOR.WALL,
                    });
                }
                else {
                    td.className = FLOOR.SPACE;
                    this.blocks.push({
                        node: td,
                        position: { x: x, y: y },
                        type: FLOOR.SPACE,
                    });
                }
            }
        }
        this.parents.appendChild(this.table);
    };
    return Floor;
}());
__reflect(Floor.prototype, "Floor");
//# sourceMappingURL=Floor.js.map