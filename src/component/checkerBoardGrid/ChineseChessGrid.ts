import { CheckerBoardType } from "../checkerBoard/CheckerBoard.js";
import type { Coordinate, Coordinate2D } from "../coordinate/CoordinateSystem.js";
import { CheckerBoardGrid } from "./CheckerBoardGrid.js";

export class ChineseChessGrid extends CheckerBoardGrid {

    public coordinate: Coordinate2D;
    constructor() {
        super(CheckerBoardType.ChineseChess);
    }
    public render(): void {
        throw new Error("Method not implemented.");
    }
    public init(): void {

    }
    public onClick(): void {
        throw new Error("Method not implemented.");
    }
    public onPointerOver(): void {
        throw new Error("Method not implemented.");
    }
    public onPointerLeave(): void {
        throw new Error("Method not implemented.");
    }
    public getCodinate(): void {
        throw new Error("Method not implemented.");
    }
    public getRelativeGridPosition(relativeCoordinate: Coordinate): void {
        throw new Error("Method not implemented.");
    }
    public destory(): void {
        throw new Error("Method not implemented.");
    }

}