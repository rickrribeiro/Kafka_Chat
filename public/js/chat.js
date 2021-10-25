document.getElementById("messagesCount").innerHTML="1000 messagens"
const socket = io();
socket.on('message', function(msg) {     
    console.log(msg)
});



function sendMessage(){
    const message = document.getElementById("textMessage").value
  
    if(message!= undefined && message.length>0){
        socket.emit('sendmessage', `{"sender":"ricardo","message":"${message}"}`);
    }
}