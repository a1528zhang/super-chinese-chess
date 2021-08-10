export enum CheckerBoardType {
    ChineseChess,
}
// 坐标以左上角为准，左上角为 0，0，向右和向下增加
export type Coordinate2D = Coordinate;
// 坐标以最底层为准，最底层为 0，向上增加
export type Coordinate3D = Coordinate & {
    z: number;
}

export type Coordinate = {
    x: number;  // 列
    y: number;  // 行
};

/**
 * 棋盘，承载棋盘格，可以重置棋盘格
 * 限制选择器只能在棋盘范围内生效
 */
export class CheckerBoard {

    private checkerBoardType: CheckerBoardType;
    private height: number;
    private width: number;

    constructor () {}
    public init(): void {}
    public reset(): void {}
    public destory(): void {}

}