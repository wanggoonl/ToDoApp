const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function removeLi(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = newTodo.text;
  btn.innerText = "X";
  btn.addEventListener("click", removeLi);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function toDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const loadToDos = localStorage.getItem(TODOS_KEY);

if (loadToDos !== null) {
  const parsedToDos = JSON.parse(loadToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
