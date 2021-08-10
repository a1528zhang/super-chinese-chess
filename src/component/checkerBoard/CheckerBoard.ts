export enum CheckerBoardType {
    ChineseChess,
}
// 坐标以左上角为准，左上角为 0，0，向右和向下增加
export type Coordinate2D = {
    x: number;  // 列
    y: number;  // 行
}

export class CheckerBoard {

    private checkerBoardType: CheckerBoardType;
    private height: number;
    private width: number;

    constructor () {}
    public init(): void {}
    public reset(): void {}
    public destory(): void {}

}