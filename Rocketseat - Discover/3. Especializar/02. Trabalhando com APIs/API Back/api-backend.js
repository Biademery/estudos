const express = require("express");
const app = express();

app.listen("3001");

// get
app.route("/").get((req, res) => res.send("Bia D'Emery"));
app.route("/sobre").get((req, res) => res.send("Sobre Bia"));

// middleware
app.use(express.json());
// post
app.route("/").post((req, res) => res.send(req.body));

// put
app.use(express.json());

let author = "Bia";

app.route("/").put((req, res) => {
  author = req.body.author;
  res.send(author);
});

// //delete
app.route("/:identificador").delete((req, res) => {
  res.send(req.params.identificador);
});

// body params
app.use(express.json());
app.route("/").post((req, res) => {
  const { nome, cidade } = req.body;
  res.send(`meu nome é ${nome} e minha cidade é ${cidade}`);
});

// route params
app.route("/:").get((req, res) => res.send("Olá"));
app.route("/:variavel").get((req, res) => res.send(req.params.variavel));

// query params
app.route("/").get((req, res) => res.send(req.query));
