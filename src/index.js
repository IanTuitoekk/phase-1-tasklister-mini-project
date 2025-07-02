document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  buildToDo(document.getElementById("new-task-description").value);
});

function buildToDo(todo) {
  let li = document.createElement("li");
  li.textContent = todo;
  document.querySelector("#tasks").appendChild(li);
}
