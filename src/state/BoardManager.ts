import type { CheckerBoard } from "../component/checkerBoard/CheckerBoard.js";
import type { CheckerBoardGrid } from "../component/CheckerBoardGrid.js";
import type { Chessman } from "../component/chessman/Chessman.js";

// 全部棋盘格，3 维棋盘 x, y, z, 2 维棋盘 z 永远是 1
export type CheckerBoardGrids = CheckerBoardGrid[][][];
// 全部棋子
type Chessmans = {
    [uuid: string]: Chessman
};

// 棋盘格与棋子映射，一个格子可能有多个棋子，映射仅反映有棋子的棋盘格
// key 为坐标 string： x, y, z
// val 为棋子 uuid[]
type GridChessmanMap = {
    [coordinateString: string]: string[],
};
// 棋子与棋盘格映射，一个棋子可能占用多个格子，映射仅反映在棋盘格上的棋子
// key 为棋子 uuid
// val 为格子坐标 string： x, y, z []
type ChessmanGridMap = {
    [uuid: string]: string[],
};

/**
 * 棋盘管理器，单例，
 * 所有地形砖块、棋子、选择器等有属性的对象均在此进行管理
 * 所有对象进行属性改变均在此进行调用
 * 全局所有组件都可以直接调用方法，由 state manager 监听并修改属性。保证可以实现多端同步
 */
export abstract class BoardManager {

    checkerBoard: CheckerBoard;
    checkerBoardGrids: CheckerBoardGrids;
    chessmans: Chessmans;
    gridChessmanMap: GridChessmanMap;
    chessmanGridMap: ChessmanGridMap;

    constructor(container: HTMLDivElement) {
        this.createCheckerBoard(container);
        this.createCheckerBoardGrids();
    }
    public abstract createCheckerBoard(container: HTMLDivElement): void;
    public abstract createCheckerBoardGrids(): void;
    public abstract createChessmans(): void;
    public abstract reset(): void;
    public abstract onEvent(): void;

}