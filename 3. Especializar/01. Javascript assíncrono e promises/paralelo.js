import axios from "axios";

Promise.all([
  axios.get("https://api.github.com/users"),
  axios.get("https://api.github.com/users/maykbrito"),
  axios.get("https://api.github.com/users/maykbrito/repos"),
])
  .then((responses) => {
    console.log(responses[0].data[0]);
    console.log(responses[0].data[1]);
    console.log(responses[1].data.login);
    console.log(responses[2].data.length);
  })
  .catch((err) => console.log(err.message));
