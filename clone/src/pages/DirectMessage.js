import React from "react";
import Grid from "../elements/Grid";
import MenuList from "../components/MenuList";
import styled from "styled-components";
import Header from "../shared/Header";
import ChatRoom from "../Container/ChatRoom";

function DirectMessage() {
  return (
    <Wrap>
      <Grid>
        <Header />
        <MenuList />
        <ChatRoom />
      </Grid>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background: #1a1d21;
  overflow: hidden;
`;

export default DirectMessage;
