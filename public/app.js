function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="removeTask(this)">Remove</button>
  `;
  
  taskList.appendChild(li);
  taskInput.value = '';
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}