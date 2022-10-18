const url = "http://localhost:5501/api";

function getUsers() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((error) => console.error(error));
}

function addUsers(newUser) {
  axios
    .post(url, newUser)
    .then((reponse) => {
      console.log(reponse);
    })
    .catch((error) => console.error(error));
}

const newUser = {
  name: "Joana",
  avatar: "https://picsum.photos/200/300",
  city: "Rio",
};

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((reponse) => {
      userId.textContent = reponse.data.id;
      userName.textContent = reponse.data.name;
      userAvatar.src = reponse.data.avatar;
      userCity.textContent = reponse.data.city;
    })
    .catch((error) => console.error(error));
}

function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
}

const userUpdated = {
  name: "Maria",
  avatar: "https://picsum.photos/200/300",
  city: "Sao Paulo",
};

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error()));
}

getUsers();
getUser(2);
updateUser(2, userUpdated);
deleteUser(1);
// addUsers(newUser)
