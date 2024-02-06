const firstArray = [{name: '', dueDate : ''}];

  rodarLista();

function rodarLista () {

  let firstArrayHTML = '';

  firstArray.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = 
      `<div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          firstArray.splice(${index}, 1);
          rodarLista();
          " class="delete-button">Delete
        </button>
      `;
      
    firstArrayHTML += html;
  });

    document.querySelector('.js-container')
      .innerHTML = firstArrayHTML;
}

document.querySelector('.js-todo-button')
  .addEventListener('click', () => {
  addButton()
});

  function addButton () {
    const variable1 = document.querySelector('.js-inputelement');
    const variable2 = variable1.value;
    const dateInputElement = document.querySelector('.js-dueDate-input');
    const dueDate = dateInputElement.value;
    firstArray.push({
      name: variable2,
      dueDate
    });
      variable1.value = '';
      rodarLista();
   
  }