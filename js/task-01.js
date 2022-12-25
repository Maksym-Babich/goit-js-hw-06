const listRef = document.querySelector('#categories');

console.log(`Number of categories: ${listRef.children.length}`);

for (let i = 0; i < listRef.children.length; i+=1) {
    console.log(`Category: ${listRef.children[i].querySelector('h2').textContent}`);
    console.log(`Elements: ${listRef.children[i].querySelector('ul').children.length}`);
}