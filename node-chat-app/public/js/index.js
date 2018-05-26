var socket = io();

socket.on('connect', function () {
  console.log('connected to the server');

  socket.emit('createMessage', {
    from: 'Hamed',
    text: 'Hello this message sent from client to the server',
  })
});

socket.on('disconnect', function () {
  console.log('Disconnedcted from server')
});

socket.on('newMessage', function (message) {
    console.log('New Message', message)
})