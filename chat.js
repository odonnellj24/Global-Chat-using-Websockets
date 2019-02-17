//make connection

var socket = io.connect('http://localhost:4000');

//query DOM
var message = document.getElementById('message');
var    handle = document.getElementById('handle');
var    btn = document.getElementById('send');
var    output = document.getElementById('output');


//Emit Events

btn.addEventListener('click',function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
   // console.log('message');
});

socket.on('chat',function(data){
    console.log('message',data);
    output.innerHTML = '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});