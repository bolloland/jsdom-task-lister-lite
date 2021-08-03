// http://localhost:8000/
let inputBox = document.querySelector("#new-task-description")
// inputBox.value  >> whatever is entered in box
let createButton = document.querySelector("#submitButton")
let taskList = document.querySelector("#tasks")

document.addEventListener("DOMContentLoaded", () => {
  //click submit
  //stop the submit
  //take info in task box and append it, as list item, to Todo list
  createButton.addEventListener("click", (event) => {
      event.preventDefault()
      const li = document.createElement("li")
      taskList.appendChild(li).innerHTML = inputBox.value
      inputBox.placeholder = "enter next task"
      inputBox.value = ""
      // taskList.appendChild(`<li> ${inputBox.value} </li>`)}
  });
})

// A delete function that will remove tasks from your list
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
