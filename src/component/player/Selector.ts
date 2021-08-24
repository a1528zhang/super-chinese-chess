import type { Chessman } from "../chessman/Chessman.js";
import type { Coordinate } from "../coordinate/CoordinateSystem.js";

/**
 * 选择器，可以点击棋盘格或是棋子, hover 显示详情, 需要对移动设备进行兼容
 * 移动通过拖动实现，点击为选择事件
 * TODO 每种类型的棋盘需要做一个选择器，待抽象
 */
export default class Selector {

    private coordinate: Coordinate | undefined;

    constructor() {
    }
    private displayShadowChessman = (chessman: Chessman): void => {

    }
    onClickUp(): void {
        // 坐标与被选择对象未变化，ondiselect
        // 否则 move (? attack) && ondiselect
    }
    onClickDown(): void {
        // onslelect
    }
    onSelectorMoveIn(): void {
        // TODO 兼容移动设备
    }
    onSelectorMoveOut(): void {
        // TODO 兼容移动设备
    }
    // 选择器移动
    onSelectorMove = (event: MouseEvent, grideSize: number, boardHeight: number, boardWidth: number): void => {
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
            z: 1
        }
    }

}