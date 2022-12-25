let counterValue = 0;

const refs = {
    btnIncrement: document.querySelector('[data-action="increment"]'),
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value'),
}
const onBtnIncrementClick = function () {
    counterValue += 1;
    refs.counter.textContent = counterValue;
};
const onBtnDecrementClick = function () {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
}

refs.btnIncrement.addEventListener('click', onBtnIncrementClick);
refs.btnDecrement.addEventListener('click', onBtnDecrementClick);