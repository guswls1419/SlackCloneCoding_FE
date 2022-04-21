import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, Button, Text, Input } from "../elements";
import { Link, useHistory } from "react-router-dom";
import DirectMessage from "../pages/DirectMessage";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useDispatch } from "react-redux";
import { actionCreators as dmAction } from "../redux/modules/dm";

const Invitation = (props) => {
  const history = useHistory();
  const disptch = useDispatch();

  const { createRoom,roomlist } = props;

//  const test = 
//    createRoom
//    history.push(`/chat/${roomlist.roomid}`)
//    //disptch(chatRoomName)
//  }

  //인풋 값 전달함수

  const [chatRoomName,setChatRoomName] = useState();
  const handleChatName = (e) => {
    setChatRoomName(e.target.value)
    disptch(dmAction.getDm(chatRoomName))
  };

  const { open, close } = props;

  return (
    <React.Fragment>
       {open 
      ? ( <ModalWrap>
        <Modal>
          <div>
            <Grid is_flex padding="20px">
              <div
                style={{ fontSize: "20px", fontWeight: "800", color: "white" }}
              >
                채팅방개설
              </div>
              <button
                style={{
                  fontSize: "20px",
                  color: "white",
                  background: "none",
                  border: "none",
                }}
                onClick={close}
              >
                x
              </button>
            </Grid>
            
            <Grid is_flex padding="0px 20px 0px 20px">
              <Textarea
                type="textarea"
                placeholder="채팅방명을 입력해 주세요."
                onChange={handleChatName}
              />
            </Grid>
            
            
            <Grid padding="0px 20px 8px 20px">
              <div
                style={{ fontSize: "13px", fontWeight: "300", color: "white" ,marginTop:"8px"}}
              >
                요청이 관리자에게 전송되며 승인되거나 거부되면 알림을 받게
                됩니다.
              </div>
            </Grid>
            <Link to={`/chat/${roomlist.roomid}`}>
            <ChatBTN
              onClick={createRoom}
             > 
              요청 보내기
            </ChatBTN>
            </Link>
          </div>
        </Modal>
      </ModalWrap>) 
      : null }
    </React.Fragment>
  );
};

const Modal = styled.div`
  height: 230px;
  max-width: 350px;
  min-width: 520px;
  background: #1a1d21;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  border-radius: 6px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;
const ModalWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 35px;
  padding: 13px;
  background: none;
  border: 1px solid #464646;
  border-radius: 3px;
  font-size: 15px;
  font-weight: bold;
  resize: none;
  color: #ababad;
  &:focus {
    outline: none;
  }
`;
const ChatBTN = styled.button`
  width: 30%;
  height: 35px;
  text-align:center;
  background: #212121;
  border-radius: 3px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  border : none;
  position : absolute;
  left : 35%;
  bottom : 20px;
`;

export default Invitation;
