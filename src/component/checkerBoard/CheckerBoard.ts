export enum CheckerBoardType {
    ChineseChess,
}

export enum ComponentType {
    CheckerBoard,
    CheckerBoardGrid,
    Chessman,
    Selector,
    User,
}

/**
 * 棋盘，承载棋盘格，可以重置棋盘格
 * 限制选择器只能在棋盘范围内生效
 * 棋盘坐标以第一个进入游戏的玩家进行定位，其余玩家要经过坐标换算来保证自己的棋子里自己最近
 */
export class CheckerBoard {

    private checkerBoardType: CheckerBoardType;
    private height: number;
    private width: number;

    constructor () {}
    public init(): void {}
    public render(): void {}
    public reset(): void {}
    public destory(): void {}

}