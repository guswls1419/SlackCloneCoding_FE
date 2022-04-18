import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import WorkSpace from "./WorkSpace";
import ChatRoom from "../Container/ChatRoom";

function MenuList() {
  return (
    <DmWrap>
      <WorkSpace />
      <Menu />
      <ChatRoom />
    </DmWrap>
  );
}

const DmWrap = styled.div`
  min-width: 20%;
  max-width: 10%;
  overflow: hidden;
  height: 100vh;
  border-right: 1px solid #464646;
`;

export default MenuList;
