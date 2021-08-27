import type { CheckerBoard} from "../checkerBoard/CheckerBoard";
import type { Coordinate } from "../coordinate/CoordinateSystem";
import type { CheckerBoardGridProps } from "./CheckerBoardGrid";
import { CheckerBoardGrid } from "./CheckerBoardGrid";

export class ChineseChessGrid extends CheckerBoardGrid {

    constructor(props: CheckerBoardGridProps, container: CheckerBoard) {
        super(props, container);
    }
    public render(container: CheckerBoard): void {
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