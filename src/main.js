
// Fetch the items
function loaditems() {
    return fetch('/data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}


// main
loaditems()
.then(items => {
    console.log(items)
    // displayItems(items);
    // setEventListners(items);
})
.catch(console.log);