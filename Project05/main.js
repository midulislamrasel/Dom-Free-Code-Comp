/*
    **document.getElementById()
    **addEventListener()
    **e.target
    **appendChild
            **createElement()
            **parentElement()
            **remove()
            **classList.add()
 */


//Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

//Event Listener For add Button
addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('text');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li)


    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class = "fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);


    //delete

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class = "fa-solid fa-trash-can"></i>';
    checkButton.classList.add('deleteTask');
    task.appendChild(deleteButton);


    if (inputTask.value === " ") {
        alert('Please Enter a Task');
    }
    else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";
})