const soups = {
    name: ['Chicken Tom Yum', 'Tom Yum Sea food', 'Tom Kha Kai', 'Miso Soup'],
    price: [15, 25, 25, 10]
};

const salads = {
    name: ['Papaya Salad', 'Tom Kha Kai', 'Miso Soup'],
    price: [15, 25, 30]
};

const sides = {
    name: ['Steam rice', 'Sticky rice', 'Yellow Curry Rice', 'Fried rice'],
    price: [2, 2.5, 3, 4]
};

const mains = {
    name: ['Chicken cashew nut', 'Fish sweet and sour', 'Pork ribs', 'Pork in basil leafs'],
    price: [5, 10, 10, 4]
}


var x, txt = "";

for (x in soups.name) {
    const newElem = document.createElement('txt');
    newElem.textContent = `${soups.name[x]} $${soups.price[x]}`;
    document.getElementById('soups').appendChild(newElem);
    newElem.style.display = 'block'
};
for (x in salads.name) {
    const newElem = document.createElement('txt');
    newElem.textContent = `${salads.name[x]} $${salads.price[x]}`;
    document.getElementById('salads').appendChild(newElem);
    newElem.style.display = 'block'
};
for (x in sides.name) {
    const newElem = document.createElement('txt');
    newElem.textContent = `${sides.name[x]} $${sides.price[x]}`;
    document.getElementById('sides').appendChild(newElem);
    newElem.style.display = 'block'
};
for (x in mains.name) {
    const newElem = document.createElement('txt');
    newElem.textContent = `${mains.name[x]} $${mains.price[x]}`;
    document.getElementById('mains').appendChild(newElem);
    newElem.style.display = 'block'
};