import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import MenuList from "../components/MenuList";
import styled from "styled-components";
import Header from "../shared/Header";
import Detaill from "../components/Detaill";
import Thread from "../components/Thread";
import { over } from "stompjs";
import SockJS from "sockjs-client";

function DirectMessage() {
  // const [userData, setUserData] = useState({ name: "" });
  // var stompClient = null;

  // useEffect(() => {
  //   connect();
  // }, []);

  // const connect = () => {
  //   let Sock = new SockJS("http://54.180.105.154/ws-stomp");
  //   stompClient = over(Sock);
  // };

  //버튼 실행함수

  return (
    <Wrap>
      <Grid>
        <Header />
        <MenuList />
        <Thread />
        <Detaill />
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

export default DirectMessage;
