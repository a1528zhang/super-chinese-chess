import { SuperChineseChess } from "../src"

const root = document.getElementById("root") as HTMLDivElement;
new SuperChineseChess({
    type: "origin",
    frame: root,
    listener: {
        onGameLoadEnd: () => {console.log("ready")}
    }
});