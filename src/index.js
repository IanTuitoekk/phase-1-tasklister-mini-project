document.addEventListener("DOMContentLoaded", () =>{
  let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(document.getElementById("new-task-description").value);
    form.reset() 
  })
});

function buildToDo(todo) {
  let li = document.createElement("li");
  li.textContent = todo;
  document.querySelector("#tasks").appendChild(li);

  let button = document.createElement("button")
  button.textContent = 'x'
  button.addEventListener("click",deleteToDo)

  document.querySelector('li').appendChild(button)
}

function deleteToDo(e){
  e.target.parentNode.remove()
}
