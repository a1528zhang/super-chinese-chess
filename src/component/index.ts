import { CheckerBoard } from "./CheckerBoard.js";

// 标准棋盘比例
export type BoardProportion = {
    column: number;
    row: number;
}
const standardBoardProportion: BoardProportion = {
    column: 9,
    row: 10,
}

export function createCheckerBoard(container: HTMLElement, height: number) {
    new CheckerBoard(container, standardBoardProportion, height);
}