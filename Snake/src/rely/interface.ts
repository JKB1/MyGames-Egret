// TypeScript file
// 定义一些数据类型接口
const FLOOR = {
    SPACE: "space",
    FOOD: "food",
    BODY: "body",
    WALL: "wall"
}

interface Block{
    position: pos,
    type: string,
    node: HTMLElement
}

interface pos{
    x : number,
    y : number
}

const enum Direction{
    left=37,
    right=39 ,
    up=38,
    down=40
}