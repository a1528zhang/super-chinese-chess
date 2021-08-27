import type { CheckerBoardProps } from "../checkerBoard/CheckerBoard";
import { CoordinateSystem } from "./CoordinateSystem";
export class ChineseChessCoordinateSystem extends CoordinateSystem {

    constructor(isFirst: boolean, boardPorps: CheckerBoardProps) {
        super();
        if (isFirst) {
            this.coordinatTransform = (origin) => origin;
        } else {
            this.coordinatTransform = (origin) => {
                return {
                    x: boardPorps.width - origin.x - 1,
                    y: boardPorps.height - origin.y -1,
                    z: 1,
                }
            }
        }
    }

}