import { ChineseChessBoardManager } from "./state/ChineseChessBoardManager";

const root = document.getElementById("root");
new ChineseChessBoardManager(root as HTMLDivElement);
