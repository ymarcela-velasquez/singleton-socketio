class WS {
  // static wsInstance;
  constructor(server) {
    WS.wsInstance = this
    this.io = require("socket.io")(server)
  
    this.io.on('connection', function(socket) {
      var messages = [
        {
          id: 1,
          text: "",
          author: "",
        },
      ]

      console.log('Alguien se ha conectado con Sockets');
      socket.emit('messages', messages);
      socket.on('new-message', function(data) {
        messages.push(data);
        // this.io.emit('broadcast', messages)
        // this.io.sockets.emit('messages', messages);
      })
    })
  }
}

let wsInstance
module.exports = (server) => {
  if (!wsInstance) {
    wsInstance = new WS(server)
  }
  return wsInstance
}