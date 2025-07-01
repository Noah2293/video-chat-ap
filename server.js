const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
