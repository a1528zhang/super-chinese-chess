import type { ChessBoard } from "../chessBoard/ChessBoard";
import type { Coordinate } from "../../coordinate/CoordinateSystem";
import { v4 as uuidv4 } from "uuid";

export type ChessBoardGridProps = {
    height: number;
    width: number;
    coordinate: Coordinate;
    backgroundColor: string;
}

/**
 * 棋盘格，可以点击，可以 hover
 * 棋盘格内可以有多个棋子，棋盘格本身有形状属性，根据游戏种类不同形状不同
 * 棋盘格用于将棋盘按照坐标进行划分并承载内部元素的 ui，棋盘格本身是个虚拟单位，被销毁后内部所有元素应该同时被销毁
 */
export abstract class ChessBoardGrid {

    chessBoard: ChessBoard;
    uuid: string;
    props: ChessBoardGridProps;
    coordinate: Coordinate;
    figure: HTMLElement;

    constructor(props: ChessBoardGridProps) {
        this.uuid = uuidv4();
        this.props = props;
        this.figure = this.getFigure(props);
    }
    public abstract init(): void;
    public abstract onClick(): void;
    public abstract onPointerOver(): void;
    public abstract onPointerLeave(): void;
    public abstract onAction(): void;
    public abstract getCodinate(): void;
    /**
     * 获取相邻坐标
     * 参数 relativeCoordinate 代表对应 x,y,z 三轴上的最大偏移量
     * 比如{0,0,1},代表 x,y 轴就是当前坐标，z 轴可以取 +- 1 的值
     */
    public abstract getRelativeCoordinate(relativeCoordinate: Coordinate): Coordinate[];
    public abstract destory(): void;
    public abstract getFigure(props: ChessBoardGridProps): HTMLElement;

    public getPosition(): Coordinate {
        return this.coordinate;
    }

}