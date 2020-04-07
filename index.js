const express = require("express");
const socketio = require("socket.io");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.get("/hello", function(req, res) {
  res.send("Ok!");
});

const server = app.listen(PORT, () => {
  console.log(`Server running in PORT:${PORT}`);
});

module.exports = server;

// var counter = 0;
// var looper = setInterval(function(){
//     counter++;
//     console.log("Counter is: " + counter);

//     if (counter >= 5)
//     {
//         clearInterval(looper);
//     }
// }, 1000);

let instances = [];
setInterval(() => {
  // let instance = new WS(server);
  let instance = require("./ws")(server);
  if (instance) {
    instances.push(instance);
  }
  // console.log("instance: ", instance)
  console.log("longitud: ", instances.length);
}, 5000);
