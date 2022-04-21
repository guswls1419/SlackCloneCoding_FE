import React, { useEffect, useState,useCallback,useRef } from "react";
import styled from "styled-components";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import axios from "axios";

import Grid from "../elements/Grid";
import MenuList from "../components/MenuList";
import Header from "../shared/Header";
import ChatList from "../chating/ChatList";
// import { Scrollbars } from 'react-custom-scrollbars';
import Detaill from "../components/Detaill";
import { useParams } from "react-router-dom";

var stompClient = null;
//현재 백엔드분들이 만드신 서버내의 roomId 주소

function ChatDetaill(props) {
  const param = useParams();
  const server = "http://3.38.104.97";
  //map 을 돌려서 뿌려주게될 목록
  const [list, setList] = useState([
    { nick: "임시 사용자", text: "test message" },
  ]);

  const [roomlist, setRoomList] = useState([{ name: "", roomId: "" }]);

  console.log(roomlist.roomId);

  //화면이 렌더 될떄 서버와의 연결
  useEffect(() => {
    connect();
    return () => {};
  }, []);

  // connect 함수
  const connect = () => {
    let Sock = new SockJS(server + "/ws-stomp");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  //서버와의 연결이 되자마자 행동은 하지않으니 잠시 대기
  const onConnected = () => {};

  // 채팅방 입장시 사용하는 코드들
  const getRoom = async () => {
    const result = await axios
      .get(server + "/chat/listlookup", {
        name: "임시 사용자",
        roomId: roomlist.roomId,
      })
      .then((response) => {
        setRoomList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // //스크롤바
  // const scrollbarRef = useRef();
  // const onscroll = useCallback(()=> {
  // },[])

  // useEffect(() => { //로딩시 스크롤바 제일 아래로
  //   if(list.length===1){
  //     scrollbarRef.current.scrollToBottom();
  //   }
  // }, [list]);

  const createRoom = async () => {
    const formData = new FormData();
    formData.append("name", "임시 채팅방");
    await axios
      .post(server + "/chat/createroom", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(JSON.stringify(res.data));
        //scrollbarRef.current.scrollToBottom();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //채팅 룸에 접속한다음  소켓연결이 되야하는 라인  : 방 입장하는 버튼
  const enterRoom = (id) => {
    // stompClient.disconnect(),
    //   connect(),
    stompClient.subscribe( `/sub/chat/room/enter/${id}`, onMessageReceived );
    stompClient.send("/pub/chat/message", {}, JSON.stringify({ type: "ENTER", roomId: `${param.id}`, sender: "유저 이름", message: "as님이 입장하셨습다.", }) );
  };



  //연결된 서버와의 통신시 payloadData의 타입에 따른 정보들 //메세지 읽어오는부분
  const onMessageReceived = (payload) => {
    console.log(payload)
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData);//서버에서 보내주는 정보
    switch (payloadData.type) {
      case "JOIN":
        break;
      case "MESSAGE":
        break;
      case "TALK":
        setList((list) => [
          ...list,
          { nick: payloadData.sender, text: payloadData.message },
        ]);
        break;
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  // 메세지를 보낼때 사용하는 함수들  메세지보내는 함수
  const sendMessage = (roomId, message) => {
    stompClient.send(
      "/pub/chat/message",
      {},
      JSON.stringify({
        roomId: roomId,
        type: "TALK",
        sender: "임시 사용자",
        message: message,
      })
    );
  };
  // <ChatList list={list} /> 이부분은 프롭스로 넘겨주는 라인

  return (
    <Wrap>
      <Grid>
        <Header />
        <MenuList
          getRoom={getRoom}
          roomlist={roomlist}
          enterRoom={enterRoom}
          createRoom={createRoom}
        />
        {param.id  ?
        <ChatWrapAll>
          <ChatList
            list={list}
            sendMessage={sendMessage}
            enterRoom={enterRoom}
            // scrollbarRef={scrollbarRef}
            onscroll={onscroll}
          />
        </ChatWrapAll>
          :
          <WrapTwo>
            <Detaill />
          </WrapTwo>
          }
      </Grid>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1a1d21;
  overflow: hidden;
`;
const ChatWrapAll = styled.div`
  float: left;
  overflow: hidden;
  height: 100vh;
  min-width: 79%;
  max-width: 50%;
`;

const FixedWrapper = styled.div`
  position: fixed;
  width: 200px;
  height: 200px;
  bottom: 0;
  left: 0;
  background: white;
`;
const WrapTwo = styled.div`
 min-width: 100%;
  max-width: 50%;
position:absolute;
left : 275px;
top : 47px;

`;
export default ChatDetaill;
