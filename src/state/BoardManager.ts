import type { CheckerBoard } from "../component/checkerBoard/CheckerBoard.js";
import type { CheckerBoardGrid } from "../component/CheckerBoardGrid.js";
import type { Chessman } from "../component/chessman/Chessman.js";

/**
 * 棋盘管理器，单例，
 * 所有地形砖块、棋子、选择器等有属性的对象均在此进行管理
 * 所有对象进行属性改变均在此进行调用
 * 全局所有组件都可以直接调用方法，由 state manager 监听并修改属性。保证可以实现多端同步
 * 
 */
export abstract class BoardManager {

    private checkerBoard: CheckerBoard;
    private checkerBoardGrids: CheckerBoardGrid[];
    private chessmans: Chessman[];
    constructor() {
        this.checkerBoard = this.createCheckerBoard();
    }
    public abstract createCheckerBoard(): CheckerBoard;
    public abstract reset(): void;
    public abstract onEvent(): void;

}