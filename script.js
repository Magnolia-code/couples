import { createBoard } from "./scripts/createBoard.js";
// import { createIconsArray, createCard } from "./scripts/cards";
// import { totalFlips, gameLogic } from "./scripts/gameLogic";
// import { totalTime, startTimer, stopTimer } from "./scripts/timer";
// const gameBoard = document.querySelector(".board");dsadsadsadsaaaaaaaaaaaaaaakakashkeminonieshkerem6uschinazesssssssssssss
const startButton = document.querySelector('.board__button');




startButton.addEventListener("click", (event) => {
  event.preventDefault()
  const input = document.querySelector('.board__input');
  let columns = input.value;
  let count;
  if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
    count = columns * columns;
  } else {
    input.value = 4;
  }
  createBoard(count, columns);
});

