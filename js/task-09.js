const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const changeColorBtnRef = document.querySelector('.change-color');
const bodyRef = document.body;
const spanRef = document.querySelector('.color');
const onChangeColorBtnClick = function () {
  const colorForBody = getRandomHexColor();
  bodyRef.style.backgroundColor = `${colorForBody}`;
  spanRef.textContent = `${colorForBody}`;
};

changeColorBtnRef.addEventListener('click', onChangeColorBtnClick);
