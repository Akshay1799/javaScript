let tasks = [];


// Rendering tasks

function renderTasks(){
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
    

    if (task.completed) {
        li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskCompletion(index));


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));

    li.prepend(checkbox);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
 });
}

//Adding tasks

function addTask(){
   const taskInput = document.getElementById('task-id');
   const taskTest = taskInput.value.trim();

   if (taskTest) {
    tasks.push({text: taskTest, completed: false});
    taskInput.value = '';
    renderTasks();
   }else{
    alert('Please enter a task.');
   }
}

// Toggle task completion status

function toggleTaskCompletion(index){
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Delete a task

function deleteTask(index){
    tasks.splice(index, 1);
    renderTasks();
}

document.getElementById('btn').addEventListener('click', addTask);