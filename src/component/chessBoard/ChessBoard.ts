import { v4 as uuidv4 } from "uuid";
import type { Component, ComponentState} from "..";

export enum ComponentType {
    ChessBoard,
    ChessBoardGrid,
    Chessman,
    Selector,
    User,
}

export type ChessBoardState = {
   
};
export type ChessBoardProps = {
    chessBoardType: string;
    height: number;
    width: number;
    boardSize: BoardSize;
    backgroundColor: string;
}

export type BoardSize = {
    column: number;
    row: number;
    layer: number
}

/**
 * 棋盘，承载棋盘格，可以重置棋盘格
 * 棋盘指定游戏范围并且承载游戏内的所有元素、除了用户的操作元素以外
 * 限制选择器只能在棋盘范围内生效
 * 棋盘坐标以第一个进入游戏的玩家进行定位，其余玩家要经过坐标换算来保证自己的棋子里自己最近
 */
export abstract class ChessBoard implements Component {

    uuid: string;
    props: ChessBoardProps;
    figure: HTMLElement;
    state?: ChessBoardState;

    constructor (props: ChessBoardProps) {
        // 生成 uuid
        this.uuid = uuidv4();
        this.props = props;
    }
    
    destroy(): () => void {
        throw new Error("Method not implemented.");
    }
    public abstract init(): void;
    public abstract reset(): void;
    public abstract destory(): void;

}