import { Coordinate } from "./CheckerBoard.js";
import { Chessman } from "./Chessman.js"; 

class Pointer {
    private chessman: Chessman | undefined;
    private coordinate: Coordinate;
    constructor () {

    }
    bindChessman(chessman: Chessman) {
        this.chessman = chessman;
        this.displayPhantomChessman()
    }
    private displayPhantomChessman = (): void => {
        this.chessman.chessmanPhantomRef
    }
    unbindChessman() {
        this.chessman = undefined;
    }

}

export default new Pointer();