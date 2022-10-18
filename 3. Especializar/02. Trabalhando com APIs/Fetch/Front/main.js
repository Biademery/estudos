const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch((error) => console.error(error));
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "aplication/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

const newUser = {
  name: "Olivia Zars",
  avatar: "htttp://picsum.photos/200/300",
  city: "Rio do Sul",
};

function updateUse(updateUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

const updateUser = {
  name: "Mayk Brito",
  avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
  city: "Paraná",
};

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

// addUser(newUser)
getUsers();
getUser(9);
// updateUse(updateUser, 9)
deleteUser();
