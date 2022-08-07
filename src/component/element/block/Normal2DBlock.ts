import { Block } from "./Block";

export type Normal2DBlockProps = {
    height: number;
    width: number;
    backgroundColor?: string;
}
// 普通砖块，只有纯色，无材质
export class Normal2DBlock extends Block {

    constructor(props: Normal2DBlockProps) {
        super();
        this.height = props.height;
        this.width = props.width;
        this.backgroundColor = props.backgroundColor ?? "#FFFFFF";
    }

    public setBackgroundColor(color: string): void {
        this.backgroundColor = color;
    }

}