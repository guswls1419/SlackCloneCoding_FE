import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import {
  AiOutlineMessage,
  AiOutlineMore,
  AiFillCaretDown,
} from "react-icons/ai";
import { BsAt } from "react-icons/bs";
import { BiMerge, BiLockAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const Menu = (props) => {
  const history = useHistory();
  const { roomlist, enterRoom, createRoom } = props;

  return (
    <ul style={{ marginTop: "16px" }}>
      <LiStyle>
        <AiOutlineMessage style={{ marginRight: "5px" }} /> 스레드
      </LiStyle>
      <LiStyle>
        <BsAt style={{ marginRight: "5px" }} />
        멘션 및 반응
      </LiStyle>
      <LiStyle>
        <BiMerge style={{ marginRight: "5px" }} />
        Slack Connect
      </LiStyle>
      <LiStyle>
        <AiOutlineMore /> 더 보기
      </LiStyle>
      <br />

      {/* 채널 */}
      <DmMsg>
        <AiFillCaretDown style={{ marginRight: "5px" }} />
        채널
      </DmMsg>
      <LiStylePadding>
        <BiLockAlt style={{ marginRight: "5px" }} />
        채널1
      </LiStylePadding>

      <LiStylePadding>
        <BiLockAlt style={{ marginRight: "5px" }} />
        채널2
      </LiStylePadding>

      <LiStylePadding>
        <BiLockAlt style={{ marginRight: "5px" }} />
        채널3
      </LiStylePadding>
      <br />

      {/* 메신저 */}
      <DmMsg>
        <AiFillCaretDown style={{ marginRight: "5px" }} />
        다이렉트 메시지
      </DmMsg>
      {roomlist.map((item, index) => {
        const clickItem = () => {
          enterRoom(item.roomId);
          history.push(`/chat/${item.roomId}`);
        };

        return (
          <LiStylePadding onClick={clickItem}>
            <UserProfile style={{ marginRight: "5px" }} />
            {item.name}
          </LiStylePadding>
        );
      })}

      <ListyleWrap>
        <Plus>+</Plus>
        <LiStyle onClick={createRoom}>메시지 추가</LiStyle>
      </ListyleWrap>
    </ul>
  );
};

const UserProfile = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: white;
  float: left;
  margin-right: 10px;
  margin-left: 24px;
  margin-top: 4px;
  border: none;
`;

const Plus = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: #313438;
  float: left;
  margin-right: 10px;
  margin-left: 24px;
  margin-top: 4px;
  text-align: center;
  line-height: 20px;
  border: none;
  color: white;
`;

const PlusBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: #313438;
  float: left;
  margin-right: 10px;
  margin-left: 24px;
  margin-top: 4px;
  text-align: center;
  line-height: 20px;
  border: none;
  color: white;
`;

const LiStyle = styled.li`
  padding-left: 16px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  color: white;
  list-style: none;
`;

const LiStylePadding = styled.li`
  padding-left: 26px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  color: white;
  list-style: none;
  &:hover {
    background-color: black;
  }
`;

const ListyleWrap = styled.div`
  &:hover {
    background-color: black;
  }
`;

const LiStylePadding2 = styled.li`
  padding-left: 2px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  color: white;
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: row;
`;
const LiStylePadding3 = styled.button`
  padding-left: 2px;
  font-size: 16px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  color: white;
  list-style: none;
  border: none;
  background: none;
  &:hover {
    background-color: black;
  }
`;

const DmMsg = styled.li`
  padding-left: 16px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  color: white;
  list-style: none;
`;

const DmMsgPlust = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BtnDelete = styled.li`
  background: none;
  border: none;
  color: #464646;
  position: absolute;
  right: 12px;
`;
export default Menu;
