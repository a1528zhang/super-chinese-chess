import { CheckerBoardGrid } from "./CheckerBoardGrid.js";

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
    color: string = "#ECC6A0";
    checkerBoardGrids: CheckerBoardGrid[][] = [];

    constructor(container: HTMLElement, boardProportion: BoardProportion, height: number) {
        const checkerBoard = document.createElement("div");
        const width = height * boardProportion.column / boardProportion.row;

        checkerBoard.style.width = `${width}px`;
        checkerBoard.style.height = `${height}px`;
        checkerBoard.style.background = this.color;
        checkerBoard.style.display = "block";
        checkerBoard.style.position = "relative";
        checkerBoard.className = "board";
        container.appendChild(checkerBoard);
        
        this.checkerBoardRef = checkerBoard;
        this.height = height;

        this.createCheckerBoardGrid(boardProportion);
    }

    createCheckerBoardGrid(boardProportion: BoardProportion) {
        const gridHeight = this.height / boardProportion.row;
        for (let row = 0; row < boardProportion.row; row++) {
            for (let column = 0; column < boardProportion.column; column++) {
                const grid = new CheckerBoardGrid({row, column}, gridHeight, this.color);
                this.append(row, column, grid);
            }
        }
    }

    getGrid(coordinate: Coordinate): CheckerBoardGrid {
        return this.checkerBoardGrids[coordinate.row][coordinate.column];
    }
    getGrids(coordinates: Coordinate[]): CheckerBoardGrid[] {
        const checkerBoardGrids = [];
        for (let index = 0; index < coordinates.length; index++) {
            const coordinate = coordinates[index];
            checkerBoardGrids.push(this.checkerBoardGrids[coordinate.row][coordinate.column])
            
        }
        return checkerBoardGrids;
    }

    private append(row: number, column: number, grid: CheckerBoardGrid) {
        this.checkerBoardRef.appendChild(grid.checkerBoardGridRef);
        if (!this.checkerBoardGrids) {
            this.checkerBoardGrids = [[grid]];
        } else if (!this.checkerBoardGrids[row]) {
            this.checkerBoardGrids[row] = [grid];
        } else {
            this.checkerBoardGrids[row][column] = grid;
        }
    }

    public initGame() {
         
    }

    public destory(): void {

    }

}