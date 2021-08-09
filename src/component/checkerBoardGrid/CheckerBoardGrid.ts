import {Coordinate2D} from "../checkerBoard/CheckerBoard.js";

export class CheckerBoardGrid {
    constructor() {}
    public init() {}
    public onClick() {}
    public onPointerOver() {}
    public onPointerLeave() {}
    public getCodinate() {}
    /**
     * 获取相邻 grid 的位置
     * 参数 maxX 代表 列的最大偏移，maxY 代表行的最大偏移
     */
    public getRelativeGridPosition(relativeCoordinate: { maxX: number, maxY: number}) {}
    public destory() {}
}