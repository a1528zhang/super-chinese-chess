import type { CheckerBoardGrid } from "../CheckerBoardGrid.js";
import type { Chessman } from "../chessman/Chessman.js";

/**
 * 棋盘管理器
 * 所有地形砖块、棋子、选择器等有属性的对象均在此进行管理
 * 所有对象进行属性改变均在此进行调用
 * 所有对象均可以发送事件，由 manager 监听并修改属性。保证可以实现多端同步
 */
class BoardManager {

    private checkerBoardGrids: CheckerBoardGrid[];
    private chessmans: Chessman[];
    constructor() {}
    public reset(): void {}
    public onEvent(): void {}
    

}

export default new BoardManager();