document.getElementById("messagesCount").innerHTML="1000 messagens"
const socket = io();
socket.on('message', function(msg) {
    console.log(msg)
    str= `
    <div class="d-flex justify-content-end mb-4">
    <div class="msg_cotainer_send">
    ${JSON.parse(msg).message}
    <span class="msg_time_send">8:55 AM, Today</span>
    </div>
    <div class="img_cont_msg">
    <img src="img/ricardo.jpg" class="rounded-circle user_img_msg">
    </div>
    </div>
    `
    document.getElementById("msgThalesRicardo").innerHTML+=str
});



function sendMessage(){
    const message = document.getElementById("textMessage").value
  
    if(message!= undefined && message.length>0){
        socket.emit('sendmessage', `{"sender":"ricardo","message":"${message.replace("\n"," ")}"}`);
    }
}
