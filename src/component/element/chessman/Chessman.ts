import type { Coordinate } from "../../../coordinate/CoordinateSystem";
import type { Element } from "../Element";

export type ChessmanProps = {
    coordinate: Coordinate;
    maximumealth: number;
    health: number;
    attackPower: number;
    attackRanage: number;
    armor: number;
}
/**
 * 棋子，拥有生命值，可以被点击、悬浮操作
 * 拥有坐标，与棋盘格坐标独立
 * 可以进行攻击、移动等动作。
 * 棋子进行动作时会调用 render()
 */
export abstract class Chessman implements Element {

    uuid: string;
    coordinate: Coordinate;
    private maximumealth: number;
    private health: number;
    private attackPower: number;
    private attackRanage: number;
    private armor: number;

    private chessBoardType: string;

    constructor(chessBoardType: string) {
        this.chessBoardType = chessBoardType;
    }
    public abstract init(): void;
    public abstract onSelect(): void;
    public abstract onDisselect(): void;
    public abstract onPointerOver(): void;
    public abstract onPointerLeave(): void;
    public abstract onAction(): void;
    public abstract getCodinate(): void;

    public abstract onStateChange(): void;

    public abstract attack(): void;
    public abstract moveTo(coordinate: Coordinate): void;

    public abstract destory(): void;
    public abstract render(): void;

}
