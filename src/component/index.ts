
// component 指游戏中的所有可互动对象，对象有自身状态，可以有或者没有渲染逻辑。
export type ComponentState = Record<string, unknown>;
// figure 是组件的展示用形象，也可以没有，因为在 web 平台，暂定为 html 元素，在其他平台可能是其他的 ui 元素。
export type ComponentFigure = HTMLElement;
export interface Component {
    state?: ComponentState,  // 如果组件是固定的就可以没有 state 属性
    figure?: ComponentFigure,
    setState?(state: ComponentState): void;   // setState 会可能导致图形变化
    destroy() : () => void;
}