import type { CheckerBoardType } from "../checkerBoard/CheckerBoard.js";

export abstract class Chessman {

    private Maximumealth: number;
    private health: number;
    private attackPower: number;
    private attackRanage: number;
    private armor: number;

    private checkerBoardType: CheckerBoardType;

    constructor(checkerBoardType: CheckerBoardType) {
        this.checkerBoardType = checkerBoardType;
    }
    public abstract init(): void;
    public abstract onSelect(): void;
    public abstract onDisselect(): void;
    public abstract onPointerOver(): void;
    public abstract onPointerLeave(): void;
    public abstract getCodinate(): void;
    public abstract attack(): void;
    public abstract destory(): void;

}
