import type { Coordinate } from "./CheckerBoard.js";
import type { Chessman } from "./Chessman.js"; 

// 格子是正方形，只需要 size 参数
export class CheckerBoardGrid {

    checkerBoardGridRef: HTMLDivElement   
    ;
    color: string;
    chessman: Chessman;
    coordinate: Coordinate;

    constructor(coordinate: Coordinate, size: number, color: string) {
        const checkerBoardGrid = document.createElement("div");

        checkerBoardGrid.style.width = `${size}px`;
        checkerBoardGrid.style.height = `${size}px`;
        checkerBoardGrid.style.background = color;
        checkerBoardGrid.style.display = "block";
        checkerBoardGrid.style.position = "absolute";
        checkerBoardGrid.style.top = `${coordinate.row * size}px`;
        checkerBoardGrid.style.left = `${coordinate.column * size}px`;
        checkerBoardGrid.className = "grid";
        checkerBoardGrid.onpointerover = this.onPointerOver.bind(this);
        checkerBoardGrid.onpointerleave = this.onPointerLeave.bind(this);
        this.checkerBoardGridRef = checkerBoardGrid;
        this.color = color;
        this.coordinate = coordinate;
    }

    getPosition(): Coordinate {
        return this.coordinate;
    }

    onPointerOver(): void {
        this.checkerBoardGridRef.style.background = "#FFFFFF";
    }
    onPointerLeave(): void {
        this.checkerBoardGridRef.style.background = this.color;
    }

    onChessmanIn(): void {

    }
    onChessmanout(): void {
        
    }

    /**
     * 获取相邻 grid 的位置
     * 参数 maxX 代表 列的最大偏移，maxY 代表行的最大偏移
     */
    getRelativeGridPosition(relativeCoordinate: { maxX: number, maxY: number}): void {

    }

    append(child: HTMLDivElement): void {
        this.checkerBoardGridRef.appendChild(child);
    }
 
    public destory(): void {
        
    }

}