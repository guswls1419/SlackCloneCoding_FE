import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import MenuList from "../components/MenuList";
import styled from "styled-components";
import Header from "../shared/Header";
import Thread from "../components/Thread";
import ChatList from "../chating/ChatList";
function ChatDetaill(props) {
  return (
    <Wrap>
      <Grid>
        <Header />
        <MenuList />
        <ChatWrapAll>
          <ChatList />
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

export default ChatDetaill;
