import type { ComponentType } from "../component/checkerBoard/CheckerBoard.js";

export enum EventType {
    Reset = "Reset", // 棋盘重置
    Exchange = "Exchange",   // 玩家交换回合
    Operating = "Operating",  // 玩家操作
    Move = "Move",   // 棋子移动
    Attack = "Attack", // 棋子攻击
    //TODO
}

export type Listener = {
    [eventType in EventType]: EventCallback[];
};
export type EventCallback = () => void;
/**
 * 事件管理器
 * 全局所有对象的操作都经过该处处理，
 * 事件接受后调用 BoardManager
 */
class EventManager {

    private listeners: Listener = {} as Listener;

    public addEventListener(eventType: EventType, callback: EventCallback): void {
        if(!(eventType in this.listeners)) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(callback);
    }

    public removeEventListener(eventType: EventType, callback?: EventCallback): void {
        if(!(eventType in this.listeners)) {
            return;
        } else {
            const stack = this.listeners[eventType];
            if (!callback) {
                stack.length = 0;
            } else {
                for(let i = 0, l = stack.length; i < l; i ++) {
                    if(stack[i] === callback){
                        stack.splice(i, 1);
                        return this.removeEventListener(eventType, callback);
                    }
                }
            }
        }
    }

    public dispatchEvent(eventType: EventType): void {
        if(!(eventType in this.listeners)) {
            return;
        }
        const stack = this.listeners[eventType];
        event.target = this;
        for(let i = 0, l = stack.length; i < l; i ++) {
            stack[i].call(this, event);
        }
    }

}

export default new EventManager();