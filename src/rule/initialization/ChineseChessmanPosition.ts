export const enemyChessmanPosition: {
    [chessmanType: string]: number[][],
} = {
    "Soldier": [[3, 0], [3, 2], [3, 4], [3, 6],  [3, 8]],
    "Cannon": [[2, 1], [2, 7]],
    "Chariot": [[0, 0], [0 ,8]],
    "Cavalry": [[0, 1], [0, 7]],
    "Elephant": [[0, 2], [0, 6]],
    "Guard": [[0, 3], [0, 5]],
    "General": [[0, 4]],
}

export const selfChessmanPosition: {
    [chessmanType: string]: number[][],
} = {
    "Soldier": [[6, 0], [6, 2], [6, 4], [6, 6],  [6, 8]],
    "Cannon": [[7, 1], [7, 7]],
    "Chariot": [[9, 0], [9 ,8]],
    "Cavalry": [[9, 1], [9, 7]],
    "Elephant": [[9, 2], [9, 6]],
    "Guard": [[9, 3], [9, 5]],
    "General": [[9, 4]],
}