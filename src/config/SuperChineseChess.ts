import type { BoardSize } from "../component/chessBoard/ChessBoard";

export const boardHeight = 400;
export const standardBoardSize: BoardSize = {
    column: 9,
    row: 10,
    layer: 1,
}
export const boardWidth = boardHeight * standardBoardSize.column / standardBoardSize.row;
export const gridHeight = boardHeight / standardBoardSize.row;
export const gridWidth = gridHeight;
export const backgroundColor = "#ECC6A0";
export const gridColor = "yellow";