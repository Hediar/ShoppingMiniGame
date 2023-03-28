
// Fetch the items
function loaditems() {
    return fetch('/data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

//Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if(key == null || value == null) {
        return;
    }
    
    displayItems(items.filter(item => item[key] == value));
}


function setEventListners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items)); //logo가 선택되면 모든 items 보임
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loaditems()
.then(items => {
    console.log(items)
    displayItems(items);
    setEventListners(items);
})
.catch(console.log);