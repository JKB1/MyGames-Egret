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
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(floor) {
        var _this = _super.call(this) || this;
        _this.score = 0;
        _this.floor = floor;
        _this.snakeBody = [];
        _this.snakeLength = 3; //蛇出生时的长度
        _this.snakeSpeed = 500; //初始化蛇的速度
        _this.direction = 39 /* right */; //初始化原始运动方向
        _this.statusLayer = new statusLayer();
        return _this;
    }
    //蛇出生
    Snake.prototype.snakeBorn = function () {
        //初始化三节小蛇
        for (var i = this.snakeLength - 1; i >= 0; i--) {
            this.snakeBody.push(this.floor.blocks[i]);
        }
        //遍历蛇的的身体数组，给蛇的身体着色
        this.snakeBody.forEach(function (value) {
            value.type = FLOOR.BODY;
            value.node.className = value.type;
        });
        //生成食物
        this.food();
        //两个定时器，一个控制蛇的移动 。一个是时间
        this.timer1 = new egret.Timer(this.snakeSpeed, 0);
        this.timer1.addEventListener(egret.TimerEvent.TIMER, this.snakeMove, this);
        this.timer1.start();
        this.statusLayer.timer1 = this.timer1;
        this.timer2 = new egret.Timer(1000, 0);
        this.timer2.addEventListener(egret.TimerEvent.TIMER, this.statusInit, this);
        this.timer2.start();
        this.statusLayer.timer2 = this.timer2;
        this.keyBoardEvent();
    };
    //使蛇运动起来ß
    Snake.prototype.snakeMove = function () {
        //蛇的速度随着时间的减少而变快
        this.snakeSpeed -= this.statusLayer.currentGameTime * 4;
        //改变触发时间
        this.timer1.delay = this.snakeSpeed <= 150 ? 150 : this.snakeSpeed;
        var head = this.snakeBody[0];
        var tail = this.snakeBody[this.snakeBody.length - 1];
        var next = this.next(head, this.direction); // 获取下一个block
        //碰壁死亡和碰自身死亡
        if ((!next) || (next.type == FLOOR.BODY) || (next.type == FLOOR.WALL)) {
            this.snakeDie();
            return;
        }
        //下一个方块与食物对的坐标是否一样，即当前食物就是当前蛇头
        if (next.position.x == this.foodBlock.position.x && next.position.y == this.foodBlock.position.y) {
            this.eatFood(next);
        }
        //蛇移动导致的数组变换
        for (var i = this.snakeBody.length - 1; i > 0; i--) {
            this.snakeBody[i] = this.snakeBody[i - 1];
        }
        next.type = FLOOR.BODY;
        next.node.className = next.type;
        this.snakeBody[0] = next; //改变第一块的位置
        tail.type = FLOOR.SPACE;
        tail.node.className = tail.type;
        this.snakeBody.forEach(function (body) {
            body.type = FLOOR.BODY;
            body.node.className = body.type;
        });
    };
    //生成下一个方块
    Snake.prototype.next = function (block, direction) {
        var x, y;
        switch (this.direction) {
            case 39 /* right */:
                x = block.position.x + 1;
                y = block.position.y;
                break;
            case 37 /* left */:
                x = block.position.x - 1;
                y = block.position.y;
                break;
            case 38 /* up */:
                x = block.position.x;
                y = block.position.y - 1;
                break;
            case 40 /* down */:
                x = block.position.x;
                y = block.position.y + 1;
                break;
        }
        //filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
        return this.floor.blocks.filter(function (block) {
            if (x === block.position.x && y === block.position.y) {
                return true;
            }
        })[0];
    };
    //通过键盘控制蛇的移动
    Snake.prototype.keyBoardEvent = function () {
        var _this = this;
        var keyEvent = function (e) {
            var keyCode = e.keyCode;
            switch (keyCode) {
                case 39 /* right */:
                    if (_this.direction != 37 /* left */) {
                        _this.direction = 39 /* right */;
                    }
                    ;
                    break;
                case 37 /* left */:
                    if (_this.direction != 39 /* right */) {
                        _this.direction = 37 /* left */;
                    }
                    ;
                    break;
                case 38 /* up */:
                    if (_this.direction != 40 /* down */) {
                        _this.direction = 38 /* up */;
                    }
                    ;
                    break;
                case 40 /* down */:
                    if (_this.direction != 38 /* up */) {
                        _this.direction = 40 /* down */;
                    }
                    ;
                    break;
            }
        };
        document.addEventListener('keydown', keyEvent, false);
    };
    //
    Snake.prototype.eatFood = function (block) {
        this.snakeBody.push(block);
        this.score++;
        document.getElementsByClassName("score")[0].innerHTML = this.score.toString();
        //再一次生成食物
        this.food();
    };
    //蛇死亡
    Snake.prototype.snakeDie = function () {
        this.timer1.stop();
        this.timer2.stop();
        alert("GameOver");
    };
    //生成食物
    Snake.prototype.food = function () {
        var _this = this;
        var x = Math.floor(Math.random() * 18 + 1);
        var y = Math.floor(Math.random() * 18 + 1);
        var pos = {
            x: x,
            y: y
        };
        this.floor.blocks.forEach(function (floor) {
            if (floor.position.x == pos.x && floor.position.y == pos.y) {
                _this.snakeBody.forEach(function (body) {
                    //判断生成的食物不是蛇的身体
                    if (pos.x !== body.position.x && pos.y !== body.position.y) {
                        floor.type = FLOOR.FOOD;
                        floor.node.className = floor.type;
                        _this.foodBlock = floor;
                    }
                });
            }
        });
    };
    //初始化时间
    Snake.prototype.statusInit = function () {
        this.statusLayer.init();
    };
    return Snake;
}(egret.DisplayObjectContainer));
__reflect(Snake.prototype, "Snake");
//# sourceMappingURL=Snake.js.map