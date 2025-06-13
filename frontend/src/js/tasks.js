document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('addTaskBtn');

    if (addTaskBtn) {
        const todoText = document.getElementById('todoText');
        const todoDate = document.getElementById('todoDate');
        const taskList = document.getElementById('taskList');

        addTaskBtn.addEventListener('click', function () {
        const taskText = todoText.value.trim();
        const taskDate = todoDate.value;

        if (taskText && taskDate) {
            const li = document.createElement('li');
            li.innerHTML = `
            <span>${taskText}</span>
            <span class="task-date">${taskDate}</span>
            <button class="remove-task">🗑️</button>
            `;

            li.querySelector('.remove-task').addEventListener('click', function () {
            taskList.removeChild(li);
            });

            taskList.appendChild(li);
            todoText.value = '';
            todoDate.value = '';
        } else {
            alert('Por favor, preencha ambos os campos (tarefa e data).');
        }
        });
    }
});