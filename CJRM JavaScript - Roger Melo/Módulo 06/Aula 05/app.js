const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log(event.target.username.value);
});

const username = 'biademery';
const pattern = /^[a-z]{6,}$/;
// const isAMatch = pattern.test(username);

// if (isAMatch) {
//   console.log('o teste da regex passou =)');
// } else {
//   console.log('o teste da regex falhou =(');
// }

const isMatch = username.search(pattern);

if (isMatch) {
  console.log('o teste da regex passou =)');
} else {
  console.log('o teste da regex falhou =(');
}
