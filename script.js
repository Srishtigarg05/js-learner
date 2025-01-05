
let tasks = [];

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const task = {
            text: taskText,
            done: false,
        };
        tasks.push(task);
        displayTasks();
        taskInput.value = "";
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function toggleTaskStatus(index) {
    tasks[index].done = !tasks[index].done;
    displayTasks();
}

function displayTasks(filter = 'all') {
    const taskList = document.getElementById('tasks');
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
        if (filter === 'done') return task.done;
        if (filter === 'pending') return !task.done;
        return true;
    });

    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = task.done ? 'done' : '';
        taskItem.innerHTML = `
            ${task.text}
            <button onclick="toggleTaskStatus(${index})">
    ${task.done ? '↩️' : '✅'}
</button>
<button onclick="removeTask(${index})">🗑️</button>

        `;
        taskList.appendChild(taskItem);
    });
}

function filterTasks(filter) {
    displayTasks(filter);
}
