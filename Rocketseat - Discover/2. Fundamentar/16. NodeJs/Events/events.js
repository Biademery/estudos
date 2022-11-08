const { EventEmitter } = require("events");
const ev = new EventEmitter();

ev.on("saySomething", (message) => {
  console.log(message);
});

ev.emit("saySomething", "Mensagem by Bia D'Emery");

ev.once("saySomethingOnce", (message) => {
  console.log(message);
});

ev.emit("saySomethingOnce", "Mensagem by Bia");
ev.emit("saySomethingOnce", "Mensagem by D'Emery");
