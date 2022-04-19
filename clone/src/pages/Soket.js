// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Grid, Button, Text, Input } from "../elements";
// import { useHistory } from "react-router-dom";
// import DirectMessage from "../pages/DirectMessage";
// import ChatDetaill from "../pages/ChatDetaill";
// import { over } from "stompjs";
// import SockJS from "sockjs-client";

// const Iinvitation = (props) => {
//   const history = useHistory();

//   const [privateChats, setPrivateChats] = useState(new Map()); //사용자 목록(map이 키가됨)
//   const [userData, setUserData] = useState({ name: "" });
//   const [publicChats, setPublicChats] = useState([]);//새로운채팅방 배열
//   console.log(userData);

//    var stompClient = null;
//   // useEffect(() => {
//   //   connect();
//   // }, []);
//   //소켓
//   const connect = () => {
//     let Sock = new SockJS("http://54.180.105.154/ws-stomp");
//     stompClient = over(Sock);
//     stompClient.connect({}, onConnected, onError);
//   };

//   const onConnected = () => {
//     // setUserData({ ...userData, connected: true });
//     stompClient.subscribe("/chat/createroom", onMessageReceived);
//     stompClient.subscribe(
//       "/user/" + userData.username + "/private",
//       onPrivateMessage
//     );
//     userJoin();
//   };

//   const onError = (err) => {
//     console.log(err);
//   };

//   const userJoin = () => {
//     var chatMessage = {
//       sender: userData.name,
//       type: "enter",
//       roomId: "26b21e78-53f0-4cab-b74d-c4c65300f41a",
//     };
//     stompClient.send(
//       //   "/chat/message/1c38e86c-c072-40bf-b957-bb9977d35715",
//       "/pub/chat/message",


//       {},
//       JSON.stringify(chatMessage)
//     );
//   };

//   const onMessageReceived = (payload) => {
//     var payloadData = JSON.parse(payload.body);
//     console.log(payloadData)
//     switch (payloadData.status) {
//       case "JOIN":
//         if (!privateChats.get(payloadData.senderName)) {
//           privateChats.set(payloadData.senderName, []);
//           setPrivateChats(new Map(privateChats));
  
//         }
//         break;
//       case "MESSAGE":
//         publicChats.push(payloadData);
//         setPublicChats([...publicChats]);
//         break;
//     }
//     console.log(payload);
//   };

//   const onPrivateMessage = (payload) => {
//     console.log(payload);
//     var payloadData = JSON.parse(payload.body);
//     if (privateChats.get(payloadData.senderName)) {
//       privateChats.get(payloadData.senderName).push(payloadData);
//       setPrivateChats(new Map(privateChats));
//     } else {
//       let list = [];
//       list.push(payloadData);
//       privateChats.set(payloadData.senderName, list);
//       setPrivateChats(new Map(privateChats));
//     }
//   };

//   //인풋 값 전달함수
//   const handleUsername = (event) => {
//     const { value } = event.target;
//     setUserData({ ...userData, name: value });
//   };
  
//   //버튼 실행함수
//   const go = () => {
//     //history.push("/chat/:roomid");
//     connect();
//   };

//   return (
//     <React.Fragment>
//      {/* {userData.name ?  */}

//         <ChatDetaill/>
//        {/* : */}
//       <ModalWrap>
//         <Modal>
//           <div>
//             <Grid is_flex padding="20px">
//               <div style={{ fontSize: "20px", fontWeight: "800", color: "white" }}>
//                 HangHae99에 초대 요청 </div>
//               <button style={{fontSize: "20px", color: "white", background: "none", border: "none"}} 
//                 onClick={()=>{history.push('/dm')}} > x </button>
//             </Grid>
//             <Grid is_flex padding="0px 20px 8px 20px">
//               <div style={{ fontSize: "14px", fontWeight: "600", color: "white" }}>받는사람:</div>
//               <div style={{ fontSize: "14px", color: "white" }}> 다음에서 추가: </div>
//             </Grid>
//             <Grid is_flex padding="0px 20px 0px 20px">
//               <Textarea type="textarea" placeholder="name@naver.com" onChange={handleUsername}/>
//             </Grid>
//             <Grid padding="20px 20px 8px 20px">
//               <div style={{ fontSize: "14px", fontWeight: "600", color: "white" }}> 요청이유(옵션) </div>
//             </Grid>
//             <Grid padding="0px 20px 8px 20px">
//               <Inputs type="text" placeholder="관리자를 위한 메모 추가" />
//             </Grid>
//             <Grid padding="0px 20px 8px 20px">
//               <div style={{ fontSize: "13px", fontWeight: "300", color: "white" }}>
//                 요청이 관리자에게 전송되며 승인되거나 거부되면 알림을 받게 됩니다.
//               </div>
//             </Grid>
//             <Button backgroundColor="#F5C820" color="black" _onClick={go} width="100px">
//               요청 보내기
//             </Button>
//             </div>
//         </Modal>
//       </ModalWrap>
//       {/*  */}
//       <DirectMessage/>
      
//     </React.Fragment>
//   );
// };

// const Modal = styled.div`
//   height: 400px;
//   max-width: 350px;
//   min-width: 520px;
//   background: #1a1d21;
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 3;
//   border-radius: 6px;
//   box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
//     0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
//     0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
// `;
// const ModalWrap = styled.div`
//   margin: 0 auto;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.6);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 3;
// `;
// const Textarea = styled.textarea`
//   width: 100%;
//   height: 60px;
//   padding: 13px;
//   background: none;
//   border: 1px solid #464646;
//   border-radius: 3px;
//   font-size: 15px;
//   font-weight: bold;
//   resize: none;
//   color: #ababad;
//   &:focus {
//     outline: none;
//   }
// `;
// const Inputs = styled.input`
//   width: 95%;
//   height: 20px;
//   padding: 10px;
//   background: none;
//   border: 1px solid #464646;
//   border-radius: 3px;
//   font-size: 13px;
//   font-weight: bold;
//   color: #ababad;
// `;

// export default Iinvitation;
