import type { ChessBoard} from "../chessBoard/ChessBoard";
import type { Coordinate } from "../../coordinate/CoordinateSystem";
import type { ChessBoardGridProps } from "./ChessBoardGrid";
import { ChessBoardGrid } from "./ChessBoardGrid";

export class ChineseChessGrid extends ChessBoardGrid {

    constructor(props: ChessBoardGridProps) {
        super(props);
    }
    public getFigure(props: ChessBoardGridProps): HTMLElement {
        const chessBoardGrid = document.createElement("div");
        const {height, width, backgroundColor} = props;

        chessBoardGrid.style.width = `${width}px`;
        chessBoardGrid.style.height = `${height}px`;
        chessBoardGrid.style.background = backgroundColor;
        chessBoardGrid.style.display = "block";
        // TODO 算位置
        chessBoardGrid.style.position = "relative";
        chessBoardGrid.className = "grid";

        return chessBoardGrid;
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
    public onAction(): void {
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