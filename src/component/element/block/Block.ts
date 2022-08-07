import type { Coordinate } from "../../../coordinate/CoordinateSystem";
import type { Element } from "../Element";

// 地形砖块
export abstract class Block implements Element {

    coordinate: Coordinate;
    uuid: string;

    backgroundColor: string;
    width: number;
    height: number;
    thickness: number;

    figure?: HTMLElement;

}