import type { CheckerBoard} from "../component/checkerBoard/CheckerBoard.js";
import { CheckerBoardType } from "../component/checkerBoard/CheckerBoard.js";
import { ChineseChessBoard } from "../component/checkerBoard/ChineseChessBoard.js";
import { ChineseChessGrid } from "../component/checkerBoardGrid/ChineseChessGrid.js";
import { backgroundColor, gridColor, boardHeight, boardWidth, gridHeight, standardBoardProportion, gridWidth } from "../config/SuperChineseChess.js";
import type { CheckerBoardGrids } from "./BoardManager.js";
import { BoardManager } from "./BoardManager.js";

export class ChineseChessBoardManager extends BoardManager {

    public createCheckerBoard(container: HTMLDivElement): void {

        this.checkerBoard = new ChineseChessBoard({
            checkerBoardType: CheckerBoardType.ChineseChess,
            height: boardHeight,
            width: boardWidth,
            boardProportion: standardBoardProportion,
            backgroundColor: backgroundColor,
        }, container);
    }

    public createCheckerBoardGrids(): void {
        const {boardProportion} = this.checkerBoard.props;
        // TODO const grids: CheckerBoardGrids = [];
        for (let row = 0; row < boardProportion.row; row ++) {
            for (let column = 0; column < boardProportion.column; column ++) {
                const grid = new ChineseChessGrid({
                    height: gridHeight,
                    width: gridWidth,
                    coordinate: {
                        x: column,
                        y: row,
                        z: 1,
                    },
                    backgroundColor: gridColor,
                }, this.checkerBoard);
            }
        }
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