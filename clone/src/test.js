import SockJS from 'sockjs-client';
import StompJs from '@stomp/stompjs';

const client = new StompJs.Client({
    brokerURL: 'http://54.180.105.154:8080/api/ws',
    connectHeaders: {
      login: 'user',
      passcode: 'password',
    },
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000, //자동 재 연결
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });



  client.onConnect = function (frame) {

};

client.onStompError = function (frame) {
  console.log('Broker reported error: ' + frame.headers['message']);
  console.log('Additional details: ' + frame.body);
};

client.activate();

if (typeof WebSocket !== 'function') {
    client.webSocketFactory = function () {
      return new SockJS('http://localhost:15674/stomp');
    };
  }