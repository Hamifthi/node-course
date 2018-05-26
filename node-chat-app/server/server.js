const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Hamed',
        text: 'Hello from server to client',
        createdAt: 5262018
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected from server')
      });
});

app.use(express.static(publicPath));

server.listen(3000, () => {
    console.log(`Server run on port ${port}`);
})