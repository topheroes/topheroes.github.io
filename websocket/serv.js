var WebSocketServer = new require('ws');

// ������������ �������
var clients = {};

// WebSocket-������ �� ����� 8081
var webSocketServer = new WebSocketServer.Server({
  port: 8081
});
webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("����� ���������� " + id);

  ws.on('message', function(message) {
    console.log('�������� ��������� ' + message);

    for (var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('���������� ������� ' + id);
    delete clients[id];
  });

});