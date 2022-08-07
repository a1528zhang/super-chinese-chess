import type { BoardSize, ChessBoardProps} from "./ChessBoard";
import { ChessBoard } from "./ChessBoard";

export type ChineseChessBoardProps = {

} & ChessBoardProps;

export class ChineseChessBoard extends ChessBoard {

    constructor(props: ChineseChessBoardProps) {
        super(props);
        this.figure = this.getFigure(props);
    }

    public init(): void {
        throw new Error("Method not implemented.");
    }
    public reset(): void {
        throw new Error("Method not implemented.");
    }
    public destory(): void {
        throw new Error("Method not implemented.");
    }
    public getFigure = (props: ChineseChessBoardProps): HTMLDivElement => {
        const chineseChessBoard = document.createElement("div");
        const {height, width, backgroundColor} = props;

        chineseChessBoard.style.width = `${width}px`;
        chineseChessBoard.style.height = `${height}px`;
        chineseChessBoard.style.background = backgroundColor;
        chineseChessBoard.style.display = "block";
        chineseChessBoard.style.position = "relative";
        chineseChessBoard.className = "board";

        return chineseChessBoard;
    }

}