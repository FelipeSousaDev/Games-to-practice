const button1 = document.getElementById('js-increment-button');
let count = 0;
let countStr = document.getElementById('js-count-string');
button1.addEventListener('click', () => {
  count++;
  document.getElementById('js-count').innerHTML = count;
});

const saveButton = document.getElementById('js-save-button');
saveButton.addEventListener('click', () => {
  let counting = document.getElementById('js-count');
  const result = counting.innerText;
  countStr+= result;
  document.getElementById('js-count-string').innerHTML+= result + " - ";

  count = 0;
  counting.innerHTML = count;
});