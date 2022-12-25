const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
const newItemsList = [];

for (let ingredient of ingredients ) {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item');
  newItemsList.push(newEl);
}

listRef.append(...newItemsList);