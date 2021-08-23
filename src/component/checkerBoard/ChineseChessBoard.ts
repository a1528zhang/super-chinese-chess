import type { BoardProportion} from "./CheckerBoard";
import { CheckerBoard } from "./CheckerBoard";

export class ChineseChessBoard extends CheckerBoard {

    public init(): void {
        throw new Error("Method not implemented.");
    }
    public reset(): void {
        throw new Error("Method not implemented.");
    }
    public destory(): void {
        throw new Error("Method not implemented.");
    }
    public render(height: number, backgroundColor: string, boardProportion: BoardProportion): void {
        const container = document.getElementById("root");
        const checkerBoard = document.createElement("div");
        const width = height * boardProportion.column / boardProportion.row;

        checkerBoard.style.width = `${width}px`;
        checkerBoard.style.height = `${height}px`;
        checkerBoard.style.background = backgroundColor;
        checkerBoard.style.display = "block";
        checkerBoard.style.position = "relative";
        checkerBoard.className = "board";
        container.appendChild(checkerBoard);
        
        this.checkerBoardRef = checkerBoard;
        this.height = height;
        this.width = width;
    }

}