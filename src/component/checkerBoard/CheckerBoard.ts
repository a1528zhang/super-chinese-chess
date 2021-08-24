import { v4 as uuidv4 } from "uuid";

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

export type CheckerBoardProps = {
    checkerBoardType: CheckerBoardType;
    height: number;
    width: number;
}

export type BoardProportion = {
    column: number;
    row: number;
}

/**
 * 棋盘，承载棋盘格，可以重置棋盘格
 * 限制选择器只能在棋盘范围内生效
 * 棋盘坐标以第一个进入游戏的玩家进行定位，其余玩家要经过坐标换算来保证自己的棋子里自己最近
 */
export abstract class CheckerBoard {

    uuid: string;
    height: number;
    width: number;
    props: CheckerBoardProps;
    checkerBoardRef: HTMLDivElement;

    constructor (height: number, backgroundColor: string, boardProportion: BoardProportion, container: HTMLDivElement) {
        // 生成 uuid
        this.uuid = uuidv4();
        this.render(height, backgroundColor, boardProportion, container);
    }
    public abstract init(): void;
    public abstract reset(): void;
    public abstract destory(): void;
    public abstract render(height: number, backgroundColor: string, boardProportion: BoardProportion, container: HTMLDivElement): void;

}