
const content = document.querySelector("#content");

var socket = new WebSocket("ws://localhost:8081");

var setMessage = (message)=> {

	let msg = document.createTextNode(message);
	content.appendChild(msg);
	content.innerHTML = content.innerHTML + "<br>";

}


socket.onopen = function() {
  setMessage("Соедниенение установлено");
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert('Соединение закрыто чисто');
  } else {
    alert('Обрыв соединения'); // например, "убит" процесс сервера
  }
  alert('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function(event) {
  alert("Получены данные " + event.data);
  
};

socket.onerror = function(error) {
  alert("Ошибка " + error.message);
};


document.getElementById("submitButton").addEventListener("click", (e)=>{

	let textNode = document.getElementById("textInput");
	let textValue = textNode.value;
	textNode.value = "";
	socket.send(textValue);

});