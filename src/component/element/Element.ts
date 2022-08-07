import type { Coordinate } from "../../coordinate/CoordinateSystem";

// element 是指可以放在棋盘格中的所有元素
export interface Element {
    coordinate: Coordinate;
    uuid: string;
}