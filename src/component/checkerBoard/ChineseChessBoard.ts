import type { BoardProportion, CheckerBoardProps} from "./CheckerBoard.js";
import { CheckerBoard } from "./CheckerBoard.js";

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
    public render(props: CheckerBoardProps, container: HTMLDivElement): void {
        const checkerBoard = document.createElement("div");
        const {height, width, backgroundColor} = props;

        checkerBoard.style.width = `${width}px`;
        checkerBoard.style.height = `${height}px`;
        checkerBoard.style.background = backgroundColor;
        checkerBoard.style.display = "block";
        checkerBoard.style.position = "relative";
        checkerBoard.className = "board";
        container.appendChild(checkerBoard);
        
        this.checkerBoardRef = checkerBoard;
    }

}