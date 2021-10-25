document.getElementById("messagesCount").innerHTML="1000 messagens"
const socket = io();
socket.on('message', function(msg) {
    const sender = JSON.parse(msg).sender
    console.log(msg)
    if(sender.toLowerCase()=="ricardo"){

        str= `
        <div class="d-flex justify-content-end mb-4">
        <div class="msg_cotainer_send">
        ${JSON.parse(msg).message}
        <span class="msg_time_send">${new Date().getMinutes()}</span>
        </div>
        <div class="img_cont_msg">
        <img src="img/ricardo.jpg" class="rounded-circle user_img_msg">
        </div>
        </div>
        `
    }else{
        str = `
        <div class="d-flex justify-content-start mb-4">
            <div class="img_cont_msg">
                <img src="img/thales.jpeg" class="rounded-circle user_img_msg">
            </div>
            <div class="msg_cotainer">
               ${JSON.parse(msg).message}
                <span class="msg_time">${new Date().getMinutes()}</span>
            </div>
        </div>
        `
    }
    document.getElementById("msgThalesRicardo").innerHTML+=str
});

document.getElementById("isThales").addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("userInfo").innerHTML=`
        <div class="img_cont">
            <img src="img/ricardo.jpg" class="rounded-circle user_img">
             <span class="online_icon"></span>
        </div>
        <div class="user_info">
            <span>Chat with Ricardo</span>
            <p id="messagesCount" ></p>
        </div>
        `
    } else {
        document.getElementById("userInfo").innerHTML=`
        <div class="img_cont">
            <img src="img/thales.jpeg" class="rounded-circle user_img">
             <span class="online_icon"></span>
        </div>
        <div class="user_info">
            <span>Chat with Thales</span>
            <p id="messagesCount" ></p>
        </div>
        `
    }
  });

function sendMessage(){
    const message = document.getElementById("textMessage").value
    const sender = document.getElementById("isThales").checked?"thales":"ricardo";

  
    
    if(message!= undefined && message.length>0){
        socket.emit('sendmessage', `{"sender":"${sender}","message":"${message.replace("\n"," ")}"}`);
        document.getElementById("textMessage").value = ""
    }
}
