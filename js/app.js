document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    document.querySelector("#new-item-form").addEventListener('submit', handleEvent);
    
    document.querySelector("#new-item-form").addEventListener('select', handleEvent);
  
    document.querySelector("#delete-button").addEventListener('click', handleDeleteAll);
  });

let list = document.querySelector("#games-list")

const handleEvent = function (event) {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.className = "flex-item";
    newListItem.textContent = 
    `${event.target.title.value} - ${event.target.developer.value} - ${event.target.format.value} ${event.target.status.value}`
    const list = document.querySelector("#games-list");
    list.appendChild(newListItem);
    document.querySelector("#new-item-form").reset();
};

const handleDeleteAll = function (event) {
    const gamesList = document.querySelector('#games-list');
    gamesList.innerHTML = '';
};