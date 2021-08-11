import type { ComponentType } from "../checkerBoard/CheckerBoard.js";

export enum EventType {
    Reset, // 棋盘重置
    Exchange,   // 玩家交换回合
    Operating,  // 玩家操作
    Move,   // 棋子移动
    Attack, // 棋子攻击
    //TODO
}
/**
 * 事件发射器
 * 全局所有对象的操作都经过该发射器发送到 BoardManager
 * 
 */
class EventEmitter {

    public emit(componentType: ComponentType): void {}

}

export default new EventEmitter();