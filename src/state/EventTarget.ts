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

class EventTarget {

    private listeners: Listener = {} as Listener;

    public addEventListener(eventType: EventType, callback: EventCallback): void {
        if(!(eventType in this.listeners)) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(callback);
    }

    public removeEventListener(eventType: EventType, callback: EventCallback): void {
        if(!(eventType in this.listeners)) {
            return;
        } else {
            const stack = this.listeners[eventType];
            for(let i = 0, l = stack.length; i < l; i ++) {
                if(stack[i] === callback){
                    stack.splice(i, 1);
                    return this.removeEventListener(eventType, callback);
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

export default new EventTarget();