// add new item to run when users presses the button

// get text of input

// create new list item

// assign input to item

// add item to the list

// get elements
const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const clearAll = document.querySelector("#clearAll");

clearAll.addEventListener("click", (e) => {
  list.innerHTML = "";
});

// events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = input.value;
  console.log(inputText);

  if (!inputText) {
    return;
  }

  // create element
  const listItem = document.createElement("li");
  listItem.innerText = inputText;
  list.appendChild(listItem);

  listItem.addEventListener("click", (e) => {
    const liTarget = e.target;
    liTarget.classList.toggle("completed");
  });

  listItem.addEventListener("dblclick", (e) => {
    const liTarget = e.target;
    liTarget.remove();
  });

  // clear input
  input.value = "";
});

const listItems = document.querySelectorAll("li");
