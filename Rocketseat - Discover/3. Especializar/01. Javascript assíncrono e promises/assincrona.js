//com fetch
import fetch from "node-fetch";

async function start() {
  const response = await fetch("https://api.github.com/users/maykbrito");
  const user = await response.json();
  const reposResponse = await fetch(user.repos_url);
  const repos = await reposResponse.json();
  console.log(repos);
}

start();
//tambem podemos usar try catch

async function start() {
  const url = "https://api.github.com/users/maykbrito";
  const user = await fetch(url).then((r) => r.json());
  const userRepos = await fetch(user.repos_url).then((r) => r.json());
  console.log(repos);
}

start().catch((e) => console.log(e));

//com axios
import axios from "axios";

axios
  .get("https://api.github.com/users/maykbrito")
  .then((response) => axios.get(response.data.repos_url))
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));
