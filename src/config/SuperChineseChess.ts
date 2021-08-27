import type { BoardProportion } from "../component/checkerBoard/CheckerBoard.js";

export const boardHeight = 400;
export const standardBoardProportion: BoardProportion = {
    column: 9,
    row: 10,
}
export const boardWidth = boardHeight * standardBoardProportion.column / standardBoardProportion.row;
export const gridHeight = boardHeight / standardBoardProportion.row;
export const gridWidth = gridHeight;
export const backgroundColor = "#ECC6A0";
export const gridColor = "#ECC6A0";