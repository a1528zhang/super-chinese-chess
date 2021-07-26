export enum ChessmanType {
    Soldier, // 兵
    Cannon, // 炮
    Chariot, // 车
    Cavalry, // 马
    Elephant, // 象
    Guard, // 士
    General, //帅
}

export type ChessmanProp = {
    type: ChessmanType,
    image: string,
    health: number,
}