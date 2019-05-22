const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = 'toDos';

function paintToDo(text) {
  const li = document.createElement("li"); // html in js
  const delBtn = document.createElement("button");
  delBtn.innerText = "✖︎";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span); // span inside the li
  li.appendChild(delBtn); // button inside the li
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // input을 누르면 클리어
} 

function loadTodos() {
  const toDos = localStorage.getItem(TODO_LS)
  if(toDos !== null) {
  } 
}

function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();