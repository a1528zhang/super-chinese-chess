export function createCheckerBoard(container: HTMLElement, height: number) {
    const checkerBoard = document.createElement("div");
    const width = height * 9 / 10;
    checkerBoard.style.width = `${width}`;
    checkerBoard.style.height = `${height}`;
    checkerBoard.style.background = "#ECC6A0";

    container.appendChild(checkerBoard);
}