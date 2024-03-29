const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');

formAddTodo.addEventListener('submit', event => {
  event.preventDefault();

  const inputValue = event.target.addEventListener.value.trim();

  if (inputValue.length) {
    todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;

    event.tagert.reset();
  }
});
