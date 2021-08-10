import type { CheckerBoardType } from "../checkerBoard/CheckerBoard.js";
import type { Coordinate } from "../coordinate/CoordinateSystem.js";

/**
 * 棋盘格，可以点击，可以 hover
 * 棋盘格内可以有多个棋子，棋盘格本身有形状属性，根据游戏种类不同形状不同
 * 棋盘格带有地形砖块的作用
 * 合理设计是棋盘格与地形砖块隔离，目前可以合并。
 * 棋盘格本身无法移动，但是地形砖块可以。目前设计无法移动
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
     * 获取相邻坐标
     * 参数 relativeCoordinate 代表对应 x,y,z 三轴上的最大偏移量
     * 比如{0,0,1},代表 x,y 轴就是当前坐标，z 轴可以取 +- 1 的值
     */
    public abstract getRelativeCoordinate(relativeCoordinate: Coordinate): Coordinate[];
    public abstract destory(): void;
    public abstract render(): void;

    public getPosition(): Coordinate {
        return this.coordinate;
    }

}