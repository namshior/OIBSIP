const taskInput = document.getElementById('taskInput');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        pendingList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function createTaskItem(text, isCompleted = false) {
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = text;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    if (!isCompleted) {
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', function () {
            moveTaskToCompleted(li);
        });
        li.appendChild(completeBtn);
    }

    return li;
}

function moveTaskToCompleted(taskItem) {
    const taskText = taskItem.querySelector('span').textContent;
    const completedTask = createTaskItem(taskText, true);
    completedList.appendChild(completedTask);
    taskItem.remove();
}
