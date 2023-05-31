// Obtener referencias a los elementos del DOM
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Obtener las tareas desde el almacenamiento local o inicializar si no existen
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para renderizar las tareas en la lista
const renderTasks = () => {
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('delete-button');
    
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    // Agregar evento para eliminar tarea
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
      saveTasks();
    });
  });
};

// Función para guardar las tareas
const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para agregar una tarea
const addTask = (event) => {
  if (event.key === 'Enter') {
    const task = todoInput.value.trim();
    if (task !== '') {
      tasks.push(task);
      renderTasks();
      saveTasks();
      todoInput.value = '';
    };
  };
};

// Agregar evento al input para agregar tareas al presionar Enter
todoInput.addEventListener('keyup', addTask);
document.addEventListener('DOMContentLoaded', renderTasks);