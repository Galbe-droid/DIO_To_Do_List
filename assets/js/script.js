var toDoList = document.getElementById("savedTodo")
var toDoForm = document.getElementById('input--box')
var toDoCreated = 0

toDoForm.onsubmit = function (e){
    e.preventDefault();
    const inputField = document.getElementById('Todo')
    AddToDo(inputField.value)
    toDoForm.reset()
}

function AddToDo(description){
    const TaskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label')
    const taskDescription = document.createTextNode(description)

    newTask.setAttribute('type', 'checkbox')
    newTask.setAttribute('name', description)
    newTask.setAttribute('id', description)

    taskLabel.setAttribute('for', description)
    taskLabel.appendChild(taskDescription)

    TaskContainer.classList.add('task-item')
    TaskContainer.appendChild(newTask)
    TaskContainer.appendChild(taskLabel)


    toDoList.appendChild(TaskContainer)
}

saveToDo.addEventListener('click', AddToDo)
