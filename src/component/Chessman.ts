import { AttackProp } from "../rule/AttackType.js";
import { ChessmanProp } from "../rule/ChessmanType.js";
import { CheckerBoardGrid } from "./CheckerBoardGrid.js";

type ChessmanStyle = {
    width: number;
    height: number;
    backgroundImage: string;
    display: string;
    position: string;
    top: number;
    left: number;
    justifyContent: string;
    alignItems: string;
    alt: string;
}
export class Chessman {
    public chessmanRef: HTMLDivElement;
    public chessmanPhantomRef: HTMLDivElement;
    private chessmanProp: ChessmanProp;
    private checkerBoardGrid: CheckerBoardGrid;
    private selected: boolean = false;
    private style: ChessmanStyle;

    constructor(props: ChessmanProp, size: number, checkerBoardGrid: CheckerBoardGrid) {
        this.chessmanProp = props;
        const chessman = document.createElement("div");
        const phantomChessman = document.createElement("div");
        this.style = {
            width: size,
            height: size,
            backgroundImage: props.image,
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
            alt: props.style.alt,
        }
        this.bindChessmanStyle(chessman);
        this.bindChessmanStyle(phantomChessman);

        checkerBoardGrid.append(chessman);
        // 棋子属于 grid，grid 含有棋子
        this.checkerBoardGrid = checkerBoardGrid;
        this.chessmanRef = chessman;

        this.bindListener();
    }

    bindChessmanStyle = (ref: HTMLDivElement): void => {
        ref.style.width = `${this.style.width}px`;
        ref.style.height = `${this.style.height}px`;
        ref.style.backgroundImage = this.style.backgroundImage;
        ref.style.display = this.style.display;
        ref.style.position = this.style.position;
        ref.style.top = `${this.style.top}}px`;
        ref.style.left = `${this.style.left}px`;
        ref.style.justifyContent = this.style.justifyContent;
        ref.style.alignItems = this.style.alignItems;
        ref.textContent = this.style.alt;
    }
    attack(target: Chessman, attackProp: AttackProp): boolean {
        return true;
    }
    moveTo(target: CheckerBoardGrid): boolean {
        return true;
    }
    bindListener() {
        this.chessmanRef.onclick = this.onclick;
    }

    onclick = (ev: MouseEvent): any => {
        this.selected = !this.selected;
        this.bindToPointer();
    }

    bindToPointer(): void {

    };
    
    onClickUp() {
        
    }
    
    destory() {

    }
}