export enum ChessmanType {
    Soldier = "Soldier", // 兵
    Cannon = "Cannon", // 炮
    Chariot = "Chariot", // 车
    Cavalry = "Cavalry", // 马
    Elephant = "Elephant", // 象
    Guard = "Guard", // 士
    General = "General", //帅
}

export type ChessmanProp = {
    type: ChessmanType,
    image: string,
    health: number,
    style: {
        alt: string,
    }
}

export const enemyChessmanProp = {
    "Soldier": {
        type: ChessmanType.Soldier,
        image: "",
        health: 10,
        style: {
            alt: "卒"
        }
    },
    "Cannon": {
        type: ChessmanType.Cannon,
        image: "",
        health: 10,
        style: {
            alt: "砲"
        }
    },
    "Chariot": {
        type: ChessmanType.Chariot,
        image: "",
        health: 10,
        style: {
            alt: "車"
        }
    },
    "Cavalry": {},
    "Elephant": {},
    "Guard": {},
    "General": {},

}