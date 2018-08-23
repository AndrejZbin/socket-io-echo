const io = require('socket.io')();

io.on('connection', socket => {
    socket.on('echo', (...data) => {
        socket.emit('echo', ...data);
    });
    socket.on('event', (event, ...data) => {
        socket.emit(event, ...data);
    });
});

io.listen(8080);