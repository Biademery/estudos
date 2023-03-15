const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log(event.target.username.value);
});
