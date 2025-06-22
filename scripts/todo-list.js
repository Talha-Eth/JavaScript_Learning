const todolist2 = [
  {
  name: 'make dinner',
  dueDate: '2022-12-22'
  }
];
function renderText() {  
  let todolistHTML = '';

  for (let i =0; i < todolist2.length ; i++) {
    const todoObj = todolist2[i];
    const {name, dueDate} = todoObj;
    const html = 
      `<div>${name}</div>
        <div>${dueDate}</div> 
        <button class = "delete-button" onclick = "
          todolist2.splice(${i}, 1);
          renderText();
        ">
          Delete
        </button>`;
    todolistHTML += html;
  }
  console.log(todolistHTML);
  document.querySelector('.js-todo-div')
    .innerHTML = todolistHTML;
}

function addtodo2() {
  const inputElem = document.querySelector('.js-todo-input-2');
  const dueDateElem = document.querySelector('.js-due-date-input');
  const name = inputElem.value;
  const dueDate = dueDateElem.value;

  todolist2.push({
    name,
    dueDate
  });
  console.log(todolist2);
  inputElem.value = '';
  renderText();
}