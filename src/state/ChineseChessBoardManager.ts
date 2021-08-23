import type { CheckerBoard } from "../component/checkerBoard/CheckerBoard";
import { ChineseChessBoard } from "../component/checkerBoard/ChineseChessBoard";
import { backgroundColor, boardHeight, standardBoardProportion } from "../config/SuperChineseChess";
import { BoardManager } from "./BoardManager";

export class ChineseChessBoardManager extends BoardManager {

    public createCheckerBoard(): CheckerBoard {
        return new ChineseChessBoard(boardHeight, backgroundColor,  standardBoardProportion);
    }

    public reset(): void {
        throw new Error("Method not implemented.");
    }
    public onEvent(): void {
        throw new Error("Method not implemented.");
    }

}