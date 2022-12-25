function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const arrayOfDivs = [];
const createCollectionBtn = document.querySelector('button[data-create]');
const destroyCollectionBtn = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const boxesDivRef = document.querySelector('#boxes');

const onCreateBtnClick = function () {
  for (let i = 1; i <= inputRef.value; i += 1) {
    console.log(inputRef.value);
    arrayOfDivs.push(
      `<div style='background-color: ${getRandomHexColor()};
      width: ${20 + 10 * i}px;
      height: ${20 + 10 * i}px'>
      </div>`
    );
  }
  boxesDivRef.insertAdjacentHTML('beforeend', arrayOfDivs.join(''));
  arrayOfDivs.splice(0, arrayOfDivs.length);
};
const onDestroyBtnClick = function () {
  boxesDivRef.innerHTML = '';
};

createCollectionBtn.addEventListener('click', onCreateBtnClick);
destroyCollectionBtn.addEventListener('click', onDestroyBtnClick);
