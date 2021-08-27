import type { CheckerBoard} from "../component/checkerBoard/CheckerBoard";
import { CheckerBoardType } from "../component/checkerBoard/CheckerBoard";
import { ChineseChessBoard } from "../component/checkerBoard/ChineseChessBoard";
import { ChineseChessGrid } from "../component/checkerBoardGrid/ChineseChessGrid";
import { backgroundColor, gridColor, boardHeight, boardWidth, gridHeight, standardBoardProportion, gridWidth } from "../config/SuperChineseChess";
import type { CheckerBoardGrids } from "./BoardManager";
import { BoardManager } from "./BoardManager";

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