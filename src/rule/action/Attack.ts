export enum AttackType {
    Directly,
    Range,
}
export type AttackProp = {
    type: AttackType,
    damage: number; 
    kill: boolean; // 是否可以直接杀死
    longRange: boolean; // 是否远程攻击
}