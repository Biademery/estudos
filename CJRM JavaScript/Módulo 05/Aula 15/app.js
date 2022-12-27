const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('button clicked');
});

const lis = document.querySelectorAll('li');

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target;

    clickedElement.style.textDecoration = 'line-through';
  });
});
