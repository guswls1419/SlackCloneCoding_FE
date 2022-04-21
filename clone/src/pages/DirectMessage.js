// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import SockJS from "sockjs-client";
// import { over } from "stompjs";
// import axios from "axios";

// import Grid from "../elements/Grid";
// import MenuList from "../components/MenuList";
// import Header from "../shared/Header";
// import Thread from "../components/Thread";
// import Detaill from "../components/Detaill";

// var stompClient = null;
// //현재 백엔드분들이 만드신 서버내의 roomId 주소

// function ChatDetaill(props) {
//   //map 을 돌려서 뿌려주게될 목록
//   const [list, setList] = useState([
//     { nick: "test 사용자", text: "test message" },
//   ]);

//   const [roomlist, setRoomList] = useState([{ name: "", roomId: "" }]);

//   console.log(roomlist);




//   // 채팅방 입장시 사용하는 코드들
//   const getRoom = async () => {
//     const result = await axios
//       .get("http://54.180.105.154/chat/listlookup", {
//         name: "사용자",
//         roomId: roomlist.roomId,
//       })
//       .then((response) => {
//         setRoomList(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const createRoom = async () => {
//     const formData = new FormData();
//     formData.append("name", "으아아");
//     await axios
//       .post("http://54.180.105.154/chat/createroom", formData, {
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       })
//       .then((res) => {
//         console.log(JSON.stringify(res.data));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   //채팅 룸에 접속한다음  소켓연결이 되야하는 라인  : 방 입장하는 버튼
//   const enterRoom = (roomId) => {
//     // stompClient.disconnect(),
//     //   connect(),
//     stompClient.subscribe(`/sub/chat/room/enter/${roomId}`, onMessageReceived);
//   };

//   //연결된 서버와의 통신시 payloadData의 타입에 따른 정보들
//   const onMessageReceived = (payload) => {
//     var payloadData = JSON.parse(payload.body);
//     console.log(payloadData);
//     switch (payloadData.type) {
//       case "JOIN":
//         break;
//       case "MESSAGE":
//         break;
//       case "TALK":
//         setList((list) => [
//           ...list,
//           { nick: payloadData.sender, text: payloadData.message },
//         ]);
//         break;
//     }
//   };

//   const onError = (err) => {
//     console.log(err);
//   };

//   // 메세지를 보낼때 사용하는 함수들  메세지보내는 함수
//   const sendMessage = (roomId, message) => {
//     stompClient.send(
//       "/pub/chat/message",
//       {},
//       JSON.stringify({
//         roomId: roomId,
//         type: "TALK",
//         sender: "사용자",
//         message: message,
//       })
//     );
//   };

//   // <ChatList list={list} /> 이부분은 프롭스로 넘겨주는 라인
//   return (
//     <Wrap>
//       <Grid>
//         <Header />
//         <MenuList
//           getRoom={getRoom}
//           roomlist={roomlist}
//           enterRoom={enterRoom}
//           createRoom={createRoom}
//         />
//         <ChatWrapAll>
//         <Thread />
//         <Detaill />
//         </ChatWrapAll>
//       </Grid>
//     </Wrap>
//   );
// }

// const Wrap = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: #1a1d21;
//   overflow: hidden;
// `;
// const ChatWrapAll = styled.div`
//   float: left;
//   overflow: hidden;
//   height: 100vh;
//   min-width: 79%;
//   max-width: 50%;
// `;

// const FixedWrapper = styled.div`
//   position: fixed;
//   width: 200px;
//   height: 200px;
//   bottom: 0;
//   left: 0;
//   background: white;
// `;

// export default ChatDetaill;
