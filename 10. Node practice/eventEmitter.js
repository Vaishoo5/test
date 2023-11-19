const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
    sendMessage(user,message){
        console.log(`${user}: ${message}`);
        this.emit('newMessage',{user, message})
    }
}
const chatRoom= new ChatRoom();

chatRoom.on('newMessage',({user,message})=>{
    console.log(`Received message from ${user} : ${message}`)
})
chatRoom.sendMessage('UserA','Hello, everyone!')