import type { BoardManager } from "./BoardManager.js";

export type State = {

}
/**
 * 状态管理
 * 所有操作调用 stateManager 修改状态
 * 状态修改成功后收到状态回调，然后调用 boardManager 修改渲染结果
 * 状态分为本地状态和远程状态，本地状态缓存远程状态，作为判断状态变化的依据。用于触发动画
 */
export class StateManager {

    private localState: State;
    
    constructor(boardManager: BoardManager) {}

    public setState(): void {
        
    }
    /**
     * 收到回调后调用 boardManager
     */
    public onStateChage(state: State): void {

    }

}