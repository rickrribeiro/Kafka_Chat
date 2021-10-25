const express = require('express')
const app = express()
const path = require('path')
const {sendMessage} = require('./kafkajs/producer')
const {getMessage} = require('./kafkajs/consumer')
const http = require('http');
const {Server} = require('socket.io')

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const io = new Server(server);

io.sockets.on('connection', (socket) => {

    socket.on('sendmessage', data =>{
       // console.log(data)
        const msg =JSON.parse(data)
        sendMessage(msg.sender, msg.message, process.env.TOPIC)
    })

      console.log('a user connected');
});



app.get('/', (req, res)=>{
    //getMessage("ricardothales", io);
    res.render('index')
})



server.listen(3000, ()=>{
    console.log("To na porta 3000")
})