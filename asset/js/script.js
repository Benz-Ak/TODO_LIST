const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let allTodos = [];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("test");
});
