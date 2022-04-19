import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import axios from "axios";

import Grid from "../elements/Grid";
import MenuList from "../components/MenuList";
import Header from "../shared/Header";
import ChatList from "../chating/ChatList";

var stompClient = null;
//현재 백엔드분들이 만드신 서버내의 roomId 주소
const roomId = "efc24505-6549-4123-9ab0-c10fee26611a";

function ChatDetaill(props) {
  //map 을 돌려서 뿌려주게될 목록
  const [list, setList] = useState([
    { nick: "aaa", text: "test message" },
    { nick: "aaa", text: "test message" },
  ]);

  //메세지 작성시 사용하는 라인
  const [message, setMessage] = useState("");

  //화면이 렌더 될떄 서버와의 연결
  useEffect(() => {
    connect();
    return () => {};
  }, []);

  // connect 함수
  const connect = () => {
    let Sock = new SockJS("http://54.180.105.154/ws-stomp");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  //서버와의 연결이 되자마자 행동은 하지않으니 잠시 대기
  const onConnected = () => {};

  //채팅 룸에 접속한다음  소켓연결이 되야하는 라인
  const enterRoom = () => {
    stompClient.subscribe("/sub/chat/room/enter/" + roomId, onMessageReceived);
  };

  //연결된 서버와의 통신시 payloadData의 타입에 따른 정보들
  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
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

  // 채팅방 입장시 사용하는 코드들
  const getRoom = async () => {
    // const result = await axios
    //   .post("http://13.209.7.115/chat/createroom", {
    //     name: "aaaa",
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     return response;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const result = roomId;
  };

  // 메세지를 보낼때 사용하는 함수들
  const sendMessage = () => {
    stompClient.send(
      "/pub/chat/message",
      {},
      JSON.stringify({
        type: "TALK",
        roomId: roomId,
        sender: "나야",
        message: message,
      })
    );
  };
  // <ChatList list={list} /> 이부분은 프롭스로 넘겨주는 라인
  return (
    <Wrap>
      <FixedWrapper>
        <input onClick={getRoom} type={"button"} value={"방생성하기"}></input>
        <input
          onClick={enterRoom}
          type={"button"}
          value={"방 들어가기"}
        ></input>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <input onClick={sendMessage} type={"button"} value={"보내기"}></input>
      </FixedWrapper>
      <Grid>
        {/* {list.map((item, index) => {
          return (
            <div key={index}>
              {item.nick} : {item.text}
            </div>
          );
        })} */}
        <Header />
        <MenuList />
        <ChatWrapAll>
          <ChatList list={list} />
        </ChatWrapAll>
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
  max-width: 89%;
`;

const FixedWrapper = styled.div`
  position: fixed;
  width: 200px;
  height: 200px;
  bottom: 0;
  left: 0;
  background: white;
`;

export default ChatDetaill;
