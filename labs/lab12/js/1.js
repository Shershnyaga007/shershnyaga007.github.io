const tasksList = document.getElementById("tasks")
const taskInput = document.getElementById("taskText")


function createTask() {
    const item = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const span = document.createElement('span')
    span.textContent = taskInput.value
    taskInput.value = ''

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(deleteButton);
    tasksList.appendChild(item);

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            item.classList.add('complete')
        } else {
            item.classList.remove('complete');
        }
    });

    deleteButton.addEventListener('click', () => {
        item.remove();
    });
}