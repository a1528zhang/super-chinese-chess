import type { Chessman } from "../component/chessman/Chessman.js";
import type { Coordinate } from "../component/coordinate/CoordinateSystem.js";

/**
 * 选择器，可以点击棋盘格或是棋子
 * 提供绑定事件
 * 
 */
export default class Selector {

    private coordinate: Coordinate | undefined;

    constructor() {
    }
    private displayShadowChessman = (chessman: Chessman): void => {

    }
    // 选择器移动
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
            x: column,
            y: row,
        }
    }

}