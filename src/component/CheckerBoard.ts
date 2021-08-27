import { enemyChessmanInitPosition, selfChessmanInitPosition } from "../rule/ChessmanInitPosition";
import type { ChessmanProp} from "../rule/ChessmanType";
import { enemyChessmanProp,selfChessmanProp } from "../rule/ChessmanType";
import { CheckerBoardGrid } from "./CheckerBoardGrid";
import { Chessman } from "./Chessman";
import Pointer from "./Pointer";

export type BoardProportion = {
    column: number;
    row: number;
}
// 坐标以左上角为准，左上角为 0，0，向右和向下增加
export type Coordinate = {
    row: number;
    column: number;
}

export class CheckerBoard {

    checkerBoardRef: HTMLDivElement;
    height: number;
    width: number;
    color = "#ECC6A0";
    checkerBoardGrids: CheckerBoardGrid[][] = [];
    gridHeight: number;
    pointer: Pointer;

    constructor(container: HTMLElement, boardProportion: BoardProportion, height: number) {
        const checkerBoard = document.createElement("div");
        const width = height * boardProportion.column / boardProportion.row;
        this.gridHeight = height / boardProportion.row;

        checkerBoard.style.width = `${width}px`;
        checkerBoard.style.height = `${height}px`;
        checkerBoard.style.background = this.color;
        checkerBoard.style.display = "block";
        checkerBoard.style.position = "relative";
        checkerBoard.className = "board";
        container.appendChild(checkerBoard);
        
        this.checkerBoardRef = checkerBoard;
        this.height = height;
        this.width = width;

        this.createCheckerBoardGrid(boardProportion);

        this.initGame();
    }

    createCheckerBoardGrid(boardProportion: BoardProportion): void {
        for (let row = 0; row < boardProportion.row; row ++) {
            for (let column = 0; column < boardProportion.column; column ++) {
                const grid = new CheckerBoardGrid({row, column}, this.gridHeight, this.color);
                this.append(row, column, grid);
            }
        }
    }

    getGrid(coordinate: Coordinate): CheckerBoardGrid {
        return this.checkerBoardGrids[coordinate.row][coordinate.column];
    }
    getGrids(coordinates: Coordinate[]): CheckerBoardGrid[] {
        const checkerBoardGrids = [];
        for (let index = 0; index < coordinates.length; index ++) {
            const coordinate = coordinates[index];
            checkerBoardGrids.push(this.checkerBoardGrids[coordinate.row][coordinate.column])
            
        }
        return checkerBoardGrids;
    }

    private append(row: number, column: number, grid: CheckerBoardGrid): void {
        this.checkerBoardRef.appendChild(grid.checkerBoardGridRef);
        if (!this.checkerBoardGrids) {
            this.checkerBoardGrids = [[grid]];
        } else if (!this.checkerBoardGrids[row]) {
            this.checkerBoardGrids[row] = [grid];
        } else {
            this.checkerBoardGrids[row][column] = grid;
        }
    }

    public initGame(): void {
        this.pointer = new Pointer(this);
        // 重置棋子
        for(const type in enemyChessmanInitPosition) {
            const positions = enemyChessmanInitPosition[type];
            positions.forEach(position => {
                const prop: ChessmanProp = enemyChessmanProp[type];
                new Chessman(prop, this.gridHeight, this.checkerBoardGrids[position[0]][position[1]], this.pointer);
            })
        }
        for(const type in selfChessmanInitPosition) {
            const positions = selfChessmanInitPosition[type];
            positions.forEach(position => {
                const prop: ChessmanProp = selfChessmanProp[type];
                new Chessman(prop, this.gridHeight, this.checkerBoardGrids[position[0]][position[1]], this.pointer);
            })
        }
        // 初始化指针事件
        this.checkerBoardRef.onmousemove = (event: MouseEvent) => {
            this.pointer.onMouseMove(event, this.gridHeight, this.height, this.width);
        }
    }

    public destory(): void {

    }

}