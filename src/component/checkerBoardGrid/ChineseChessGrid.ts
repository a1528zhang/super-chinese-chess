import { CheckerBoardType } from "../checkerBoard/CheckerBoard.js";
import type { Coordinate } from "../coordinate/CoordinateSystem.js";
import { CheckerBoardGrid } from "./CheckerBoardGrid.js";

export class ChineseChessGrid extends CheckerBoardGrid {

    public coordinate: Coordinate;
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
    public getRelativeCoordinate(relativeCoordinate: Coordinate): Coordinate[] {
        throw new Error("Method not implemented.");
    }
    public destory(): void {
        throw new Error("Method not implemented.");
    }

}