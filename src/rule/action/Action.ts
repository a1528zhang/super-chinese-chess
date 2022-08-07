import type { Element } from "../../component/element/Element";

export type ActionType = "move" | "attack" | "buff" | "debuff" | "protect";

export interface Action {
    type: ActionType;
    target?: Element[];
    source?: Element[];
}