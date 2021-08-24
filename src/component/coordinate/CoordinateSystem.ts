// 坐标三维，平面棋盘的 z 永远为 1
export type Coordinate = {
    x: number;  // 列
    y: number;  // 行
    z: number;  // 排
};

/**
 * 坐标系
 * 游戏开始时坐标系以第一个玩家为标准进行固定，所有玩家坐标系都要进过换算来保证开局时自己的棋子最近
 */
export abstract class CoordinateSystem {

    // 坐标变换规则，不同棋盘需要不同实现
    coordinatTransform: (orign: Coordinate) => Coordinate;
    constructor() {}
    reset(): void {}

}
