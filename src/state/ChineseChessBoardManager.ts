import type { ChessBoard} from "../component/chessBoard/ChessBoard";
import { ChineseChessBoard } from "../component/chessBoard/ChineseChessBoard";
import { ChineseChessGrid } from "../component/chessBoardGrid/ChineseChessGrid";
import { backgroundColor, gridColor, boardHeight, boardWidth, gridHeight, standardBoardSize, gridWidth } from "../config/SuperChineseChess";
import type { ChessBoardGrids, Chessmans } from "./BoardManager";
import { BoardManager } from "./BoardManager";

export class ChineseChessBoardManager extends BoardManager {

    public createChessBoard(container: HTMLElement): ChessBoard {
        const chessBoard = new ChineseChessBoard({
            chessBoardType: "chinese-chess",
            height: boardHeight,
            width: boardWidth,
            boardSize: standardBoardSize,
            backgroundColor: backgroundColor,
        });
        container.appendChild(chessBoard.figure);
        return chessBoard;
    }

    public createChessBoardGrids(chessBoard: ChessBoard): ChessBoardGrids {
        const {boardSize: boardProportion} = chessBoard.props;
        const rowGrids: ChessBoardGrids = [];
        for (let row = 0; row < boardProportion.row; row ++) {
            const columnGrids: ChineseChessGrid[][] = [];
            for (let column = 0; column < boardProportion.column; column ++) {
                const layerGrids: ChineseChessGrid[] = [];
                for (let layer = 0; layer < boardProportion.layer; layer ++) {
                    const grid = new ChineseChessGrid({
                        height: gridHeight,
                        width: gridWidth,
                        coordinate: {
                            x: column,
                            y: row,
                            z: layer,
                        },
                        backgroundColor: gridColor,
                    });
                    chessBoard.figure.appendChild(grid.figure);
                    layerGrids.push(grid);
                }
                columnGrids.push(layerGrids);
            }
            rowGrids.push(columnGrids)
        }
        return rowGrids;
    }
    
    public createChessmans(): Chessmans {
        throw new Error("Method not implemented.");
    }

    public createChessGrid(): ChessBoard {
        throw new Error("Method not implemented.");
    }

    public reset(): void {
        throw new Error("Method not implemented.");
    }
    public onEvent(): void {
        throw new Error("Method not implemented.");
    }

    public destroy(): void {
        throw new Error("Method not implemented.");
    }

}