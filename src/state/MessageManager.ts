export enum MessageType {
    Reset = "Reset", // 棋盘重置
    Exchange = "Exchange",   // 玩家交换回合
    Operating = "Operating",  // 玩家操作
    Move = "Move",   // 棋子移动
    Attack = "Attack", // 棋子攻击
    //TODO
}

export type Listener = {
    [messageType in MessageType]: MessageCallback[];
};
export type MessageCallback = () => void;
/**
 * 消息管理器
 * 全局所有对象的操作都发送消息，
 * 消息接受后调用 BoardManager
 */
class MessageManager {

    private listeners: Listener = {} as Listener;

    public addEventListener(messageType: MessageType, callback: MessageCallback): void {
        if(!(messageType in this.listeners)) {
            this.listeners[messageType] = [];
        }
        this.listeners[messageType].push(callback);
    }

    public removeEventListener(messageType: MessageType, callback?: MessageCallback): void {
        if(!(messageType in this.listeners)) {
            return;
        } else {
            const stack = this.listeners[messageType];
            if (!callback) {
                stack.length = 0;
            } else {
                for(let i = 0, l = stack.length; i < l; i ++) {
                    if(stack[i] === callback){
                        stack.splice(i, 1);
                        return this.removeEventListener(messageType, callback);
                    }
                }
            }
        }
    }

    public dispatchMessage(messageType: MessageType): void {
        if(!(messageType in this.listeners)) {
            return;
        }
        const stack = this.listeners[messageType];
        for(let i = 0, l = stack.length; i < l; i ++) {
            stack[i].call(this, event);
        }
    }

}

export default new MessageManager();