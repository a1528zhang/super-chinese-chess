import type { CheckerBoardType, Coordinate} from "../checkerBoard/CheckerBoard.js";

/**
 * 棋盘格，可以点击，选择器悬浮
 * 棋盘格内可以有多个棋子，棋盘格本身有形状属性，根据游戏种类不同形状不同
 */
export abstract class CheckerBoardGrid {

    coordinate: Coordinate;
    private checkerBoardType: CheckerBoardType;

    constructor(checkerBoardType: CheckerBoardType) {
        this.checkerBoardType = checkerBoardType;
    }
    public abstract init(): void;
    public abstract onClick(): void;
    public abstract onPointerOver(): void;
    public abstract onPointerLeave(): void;
    public abstract getCodinate(): void;
    /**
     * 获取相邻 grid 的位置
     * 参数 relativeCoordinate 代表对应 x,y,z 三轴上的最大偏移量
     * 比如{0,0,1},代表 x,y 轴就是当前坐标，z 轴可以取 +- 1 的值
     */
    public abstract getRelativeGridPosition(relativeCoordinate: Coordinate): void;
    public abstract destory(): void;
    public getPosition(): Coordinate {
        return this.coordinate;
    }

}