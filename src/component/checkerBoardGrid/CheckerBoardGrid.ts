import {Coordinate2D} from "../checkerBoard/CheckerBoard.js";

export class CheckerBoardGrid {

    constructor() {}
    public init(): void {}
    public onClick(): void {}
    public onPointerOver(): void {}
    public onPointerLeave(): void {}
    public getCodinate(): void {}
    /**
     * 获取相邻 grid 的位置
     * 参数 maxX 代表 列的最大偏移，maxY 代表行的最大偏移
     */
    public getRelativeGridPosition(relativeCoordinate: { maxX: number, maxY: number}): void {}
    public destory(): void {}

}