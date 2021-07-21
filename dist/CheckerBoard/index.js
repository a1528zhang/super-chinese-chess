export function createCheckerBoard(container, height) {
    var checkerBoard = document.createElement("div");
    var width = height * 9 / 10;
    checkerBoard.style.width = "" + width;
    checkerBoard.style.height = "" + height;
    checkerBoard.style.background = "#ECC6A0";
    container.appendChild(checkerBoard);
}
//# sourceMappingURL=index.js.map