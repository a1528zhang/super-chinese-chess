import type { CheckerBoard } from "../component/checkerBoard/CheckerBoard.js";
import { ChineseChessBoard } from "../component/checkerBoard/ChineseChessBoard.js";
import { backgroundColor, boardHeight, standardBoardProportion } from "../config/SuperChineseChess.js";
import { BoardManager } from "./BoardManager.js";

export class ChineseChessBoardManager extends BoardManager {

    public createCheckerBoard(container: HTMLDivElement): void {
        this.checkerBoard = new ChineseChessBoard(boardHeight, backgroundColor, standardBoardProportion, container);
    }

    public createCheckerBoardGrids(): void {
        throw new Error("Method not implemented.");
    }
    public createChessmans(): void {
        throw new Error("Method not implemented.");
    }

    public createCheckerGrid(): CheckerBoard {
        throw new Error("Method not implemented.");
    }

    public reset(): void {
        throw new Error("Method not implemented.");
    }
    public onEvent(): void {
        throw new Error("Method not implemented.");
    }

}