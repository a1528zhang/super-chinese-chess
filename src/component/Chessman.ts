import { AttackProp } from "../rule/AttackType.js";
import { ChessmanProp } from "../rule/ChessmanType.js";
import { CheckerBoardGrid } from "./CheckerBoardGrid.js";

export class Chessman {
    private health: number;
    private chessmanProp: ChessmanProp;
    private chessmanRef: HTMLDivElement;
    private checkerBoardGrid: CheckerBoardGrid;

    constructor(props: ChessmanProp, size: number, checkerBoardGrid: CheckerBoardGrid) {
        const chessman = document.createElement("div");
        
        chessman.style.width = `${size}px`;
        chessman.style.height = `${size}px`;
        chessman.style.backgroundImage = props.image;
        chessman.style.display = "block";
        chessman.style.position = "absolute";
        chessman.style.top = `0px`;
        chessman.style.left = `0px`;

        // 棋子属于 grid，grid 含有棋子
        this.checkerBoardGrid = checkerBoardGrid;
        this.chessmanRef = chessman;
    }
    attack(target: Chessman, attackProp: AttackProp): boolean {
        return true;
    }
    moveTo(target: CheckerBoardGrid): boolean {
        return true;
    }

    onClickDown() {

    }
    onClickUp() {
        
    }
    
    destory() {

    }
}