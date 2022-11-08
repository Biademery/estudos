const express = require("express");
const axios = require("axios");

const app = express();

app.listen("3002");

app.route("/").get((req, res) => {
  axios
    .get("https://api.github.com/users/biademery")
    .then((result) => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch((error) => console.error(error));
});
