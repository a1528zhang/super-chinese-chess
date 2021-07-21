export function createCheckerBoard(container: HTMLElement, height: number) {
    const checkerBoard = document.createElement("div");
    const width = height * 9 / 10;
    
    checkerBoard.style.width = `${width}px`;
    checkerBoard.style.height = `${height}px`;
    checkerBoard.style.background = "#ECC6A0";
    checkerBoard.className = "board";
    container.appendChild(checkerBoard);
}