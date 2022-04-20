import React, { useEffect } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import WorkSpace from "./WorkSpace";

function MenuList(props) {
  const { roomlist, enterRoom, sendMessage, onMessageReceived, getRoom } =
    props;

  useEffect(() => {
    getRoom();
  }, []);

  return (
    <DmWrap>
      <WorkSpace />
      <Menu
        roomlist={roomlist}
        sendMessage={sendMessage}
        onMessageReceived={onMessageReceived}
        enterRoom={enterRoom}
      />
    </DmWrap>
  );
}

const DmWrap = styled.div`
  min-width: 20%;
  max-width: 10%;
  height: 100vh;
  border-right: 1px solid #464646;
  border-left: 1px solid #464646;
  float: left;
`;

export default MenuList;
