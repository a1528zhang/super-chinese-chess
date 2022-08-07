
import type { SuperChineseChessError } from "../error";
import { ChineseChessBoardManager } from "../state/ChineseChessBoardManager";

export type SuperChineseChessListener = {
    onGameLoadStart?: () => void,
    onUserConfigLoadEnd?: () => void,
    onChessBoardLoadEnd?: () => void,
    onChessBoardGridLoadEnd?: () => void,
    onChessmanLoadEnd?: () => void,
    onRuleLoadEnd?: () => void,
    onGameLoadEnd?: () => void,
    onError?: (error: SuperChineseChessError) => void,
}
export type SuperChineseChessOption = {
    type: "origin" | "super",
    frame: HTMLDivElement,
    listener: SuperChineseChessListener;
}
export class SuperChineseChess {

    private manager: ChineseChessBoardManager;
    private listener: SuperChineseChessListener;
    constructor(option: SuperChineseChessOption) {
        this.listener = option.listener;
        this.listener.onGameLoadStart?.();
        this.manager = new ChineseChessBoardManager(option.frame, this.listener);
        this.listener.onGameLoadEnd?.();
    }
    
    public destroy(): void {

    }

}