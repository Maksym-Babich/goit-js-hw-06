const inputRef = document.querySelector('#validation-input');

const onInputBlur = function () {
    io
    if (`${inputRef.value.length}` === inputRef.dataset.length) {
        inputRef.classList.add('valid')
    } else {
        inputRef.classList.add('invalid')
    }
};
inputRef.addEventListener('blur', onInputBlur);