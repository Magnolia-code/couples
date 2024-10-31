import { gameLogic } from "./gameLogic.js";

function createIconsArray(initialCount) {
    const cardsIcons = [
        "compass",
        "cloud",
        "play",
        "bolt",
        "stop",
        "cogs",
        "atom",
        "basketball-ball",
        "arrows",
        "angle-left",
        "bars",
        "file",
        "filter",
        "gear",
        "folder",
        "folder-open",
        "shield",
        "scissors",
        "pen-clip"
    ];
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    const doubleCards = dublicateElements(cards);
    return shuffleArray(doubleCards);
};
function createCard(flippedIcon) {
    const template = document.querySelector('#cardTemplate').cloneNode(true).content;

    const card = template.querySelector('.card');
    card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);
    card.addEventListener("click", () => 
        gameLogic(card)
    );
    return card;
}
function dublicateElements(array) {
    const newArr = [];
    array.forEach((item) => {
        newArr.push(item, item);
      });
      return newArr;
}

function shuffleArray(array) {
    let currentIndex = array.length;

    // Повторяем до тех пор, пока текущий индекс не достиг нуля
    while (currentIndex !== 0) {
      // Отнимаем индекс
      currentIndex = currentIndex - 1; //currentindex -= 1, currentIndex-- 
      // Генерируем рандомный индекс
      const randomIndex = Math.floor(Math.random() * currentIndex);
  
      // Сохраняем элемент текущего индекса
      const temp = array[currentIndex];
      // По текущему индексу размещаем элемент по случайному индексу
      array[currentIndex] = array[randomIndex];
      // А на место элемента по случайному индексу ставим сохраненный элемент бывшего текущего индекса
      array[randomIndex] = temp; };
      return array 
    }

    export { createIconsArray, createCard }
