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

export const enemyChessmanProp: {[chessmanType: string]: ChessmanProp} = {
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
    "Cavalry": {
        type: ChessmanType.Cavalry,
        image: "",
        health: 10,
        style: {
            alt: "馬"
        }
    },
    "Elephant": {type: ChessmanType.Cavalry,
                 image: "",
                 health: 10,
                 style: {
                     alt: "象"
                 }
    },
    "Guard": {
        type: ChessmanType.Guard,
        image: "",
        health: 10,
        style: {
            alt: "仕"
        }
    },
    "General": {
        type: ChessmanType.General,
        image: "",
        health: 10,
        style: {
            alt: "将"
        }
    },
}

export const selfChessmanProp: {[chessmanType: string]: ChessmanProp} = {
    "Soldier": {
        type: ChessmanType.Soldier,
        image: "",
        health: 10,
        style: {
            alt: "兵"
        }
    },
    "Cannon": {
        type: ChessmanType.Cannon,
        image: "",
        health: 10,
        style: {
            alt: "炮"
        }
    },
    "Chariot": {
        type: ChessmanType.Chariot,
        image: "",
        health: 10,
        style: {
            alt: "车"
        }
    },
    "Cavalry": {
        type: ChessmanType.Cavalry,
        image: "",
        health: 10,
        style: {
            alt: "马"
        }
    },
    "Elephant": {type: ChessmanType.Cavalry,
                 image: "",
                 health: 10,
                 style: {
                     alt: "相"
                 }
    },
    "Guard": {
        type: ChessmanType.Guard,
        image: "",
        health: 10,
        style: {
            alt: "士"
        }
    },
    "General": {
        type: ChessmanType.General,
        image: "",
        health: 10,
        style: {
            alt: "帅"
        }
    },
}