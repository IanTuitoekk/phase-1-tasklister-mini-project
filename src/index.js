document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let description = document.getElementById("new-task-description").value
    let duration = document.getElementById("new-task-duration").value
    buildToDo(description, duration)
    form.reset()
  })
})

function buildToDo(todo, duration) {
  let li = document.createElement("li")

  if (duration) {
    li.textContent = `${todo} - Duration: ${duration} `
  } else {
    li.textContent = todo + ' '
  }

  let button = document.createElement("button")
  button.textContent = 'x'
  button.addEventListener("click", deleteToDo)

  li.appendChild(button)            
  document.querySelector('#tasks').appendChild(li)
}

function deleteToDo(e) {
  e.target.parentNode.remove();
}
