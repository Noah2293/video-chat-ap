const socket = io();

socket.on('message', (msg) => {
  console.log('Received message:', msg);
});

function sendMessage(msg) {
  socket.emit('message', msg);
}
