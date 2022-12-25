const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
const onInputAction = function () {
if (inputRef.value !== '') {
    spanRef.textContent = inputRef.value;
} else {
    spanRef.textContent = 'Anonymous';
}
};

inputRef.addEventListener('input', onInputAction);