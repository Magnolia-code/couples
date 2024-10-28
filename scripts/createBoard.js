import { startTimer } from "./timer.js";
import { createIconsArray, createCard } from "./cards.js";

export function createBoard(count, columns) {
    const gameBoard = document.querySelector('.board');
    gameBoard.textContent = "";

    const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
    const icons = createIconsArray(count);
    const gameTable = template.querySelector('.table');
    const restartBtn = template.querySelector('.table__button');
    // for (let i = 0; i < count; i++) {
    //     gameTable.append(createCard());
    // }
    icons.forEach((icon) => {
        gameTable.append(createCard(icon));
      });
    gameTable.style = `
      grid-template-columns: repeat(${columns}, 1fr);
      grid-template-rows: repeat(${columns}, 1fr);
    `;
    gameBoard.append(gameTable);
    restartBtn.addEventListener("click", () => {
        location.reload();
    });
    gameBoard.append(restartBtn);
    startTimer();
}

