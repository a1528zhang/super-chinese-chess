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
 * 坐标系
 * 游戏开始时坐标系以第一个玩家为标准进行固定，所有玩家坐标系都要进过换算来保证开局时自己的棋子最近
 */
export abstract class CoordinateSystem {

    // 坐标变换参数
    private transformationParams;
    constructor() {}
    reset(): void {}

}
