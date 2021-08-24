import { ChineseChessBoardManager } from "./state/ChineseChessBoardManager.js";

const root = document.getElementById("root");
new ChineseChessBoardManager(root as HTMLDivElement);
