import type { ChessBoard } from "../component/chessBoard/ChessBoard";
import type { ChessBoardGrid } from "../component/chessBoardGrid/ChessBoardGrid";
import type { Chessman } from "../component/element/chessman/Chessman";
import type { SuperChineseChessListener } from "../starter";

// 全部棋盘格，3 维棋盘 x, y, z, 2 维棋盘 z 永远是 1
export type ChessBoardGrids = ChessBoardGrid[][][];
// 全部棋子
export type Chessmans = {
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
 * 
 * 状态采用树状结构，manager 管理所有的组件。
 * 组件自身缓存自己的当前状态，但是状态修改只能来自于外部，组件自身的状态只用来展示 ui。当状态变化时触发动画。
 * 组件对组件的动作由 manager 负责调用，同时负责修改状态并且记录。
 */
export abstract class BoardManager {

    listener: SuperChineseChessListener;
    chessBoard: ChessBoard;
    chessBoardGrids: ChessBoardGrids;
    chessmans: Chessmans;
    gridChessmanMap: GridChessmanMap;
    chessmanGridMap: ChessmanGridMap;

    constructor(container: HTMLElement, listener: SuperChineseChessListener) {
        this.listener = listener;
        // 调用顺序需要保证，棋盘 -> 棋盘格 -> 元素，每一级由上一级承载，必须保证上一级创建完成
        this.chessBoard = this.createChessBoard(container);
        this.listener.onChessBoardLoadEnd?.();

        this.chessBoardGrids = this.createChessBoardGrids(this.chessBoard);
        this.listener.onChessBoardGridLoadEnd?.();

        this.chessmans = this.createChessmans();
        this.listener.onChessmanLoadEnd?.();
    }
    public abstract createChessBoard(container: HTMLElement): ChessBoard;
    public abstract createChessBoardGrids(chessBoard: ChessBoard): ChessBoardGrids;
    public abstract createChessmans(): Chessmans;
    public abstract reset(): void;
    public abstract onEvent(): void;
    public abstract destroy(): void;

}