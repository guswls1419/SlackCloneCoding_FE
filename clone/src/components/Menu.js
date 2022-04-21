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
import Invitation from "../chating/Invitation";

const Menu = (props) => {
  const history = useHistory();
  const { roomlist, enterRoom, createRoom } = props;

  //모달창
  const [modalOpen, setModalOpen] = useState(false);
console.log(modalOpen) 
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
            <UserProfile src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoM4RYRBwV1C1mUUOx-CAn3HPYdMNp5s4ag&usqp=CAU" />
            {item.name}
          </LiStylePadding>
        );
      })}

      <ListyleWrap>
        <Plus>+</Plus>
        <LiStyle onClick={openModal}>메시지 추가</LiStyle>
        <Invitation  open={modalOpen} close={closeModal} createRoom={createRoom}/>
      </ListyleWrap>
    </ul>
  );
};

const UserProfile = styled.img`
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
