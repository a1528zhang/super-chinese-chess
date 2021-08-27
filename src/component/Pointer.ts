import type { CheckerBoard, Coordinate } from "./CheckerBoard";
import type { Chessman } from "./Chessman";

export default class Pointer {

    private chessman: Chessman | undefined;
    private coordinate: Coordinate | undefined;
    private checkerBoard: CheckerBoard;

    constructor(checkerBoard: CheckerBoard) {
        this.checkerBoard = checkerBoard;
    }
    bindChessman(chessman: Chessman): void {
        this.chessman = chessman;
        this.displayPhantomChessman()
    }
    private displayPhantomChessman = (): void => {
        console.log("display ", this.chessman.chessmanProp);
        
        this.chessman.chessmanPhantomRef.style.display = "flex";
        this.checkerBoard.checkerBoardRef.appendChild(this.chessman.chessmanPhantomRef);

    }
    unbindChessman(): void {
        this.chessman = undefined;
    }
    onMouseMove = (event: MouseEvent, grideSize: number, boardHeight: number, boardWidth: number): void => {
        const pointerX = event.clientX;
        const pointerY = event.clientY;
        let row: number;
        let column: number;
        // 保证坐标不超出边界
        if (pointerY >=  boardHeight) {
            row = (boardHeight / grideSize) - 1;
        } else {
            row = Math.floor(pointerY / grideSize);
        } 
        if (pointerX >= boardWidth) {
            column = (boardWidth / grideSize) - 1;
        } else {
            column = Math.floor(pointerX / grideSize);
        }
        this.coordinate = {
            column,
            row,
        }
    }

}