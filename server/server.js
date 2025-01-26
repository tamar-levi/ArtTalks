// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const cors = require('cors');
const path = require('path'); 

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use('/picture', express.static(path.join(__dirname, 'picture')));

const pictures = JSON.parse(fs.readFileSync('pictures.json', 'utf8'));


let chatMessages = []; 

app.get('/pictures/:id', (req, res) => {
  const picture = pictures.find(p => p.id === parseInt(req.params.id));
  if (picture) {
    res.json(picture);
  } else {
    res.status(404).send('Picture not found');
  }
});


const PORT = process.env.PORT || 4001; 

io.on('connection', (socket) => {
  console.log('A user connected');

  
  socket.emit('previous messages', chatMessages);

  socket.on('chat message', (msg) => {
    chatMessages.push(msg); 
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
