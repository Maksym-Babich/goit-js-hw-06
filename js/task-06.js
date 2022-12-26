const inputRef = document.querySelector('#validation-input');

const onInputBlur = function () {
  console.log(`inputRef.value.length = ${inputRef.value.length}`);
  console.log(`inputRef.dataset.length = ${inputRef.dataset.length}`);
  if (`${inputRef.value.length}` === `${inputRef.dataset.length}`) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
};
inputRef.addEventListener('blur', onInputBlur);
