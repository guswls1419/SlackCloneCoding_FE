import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import {
  BsTypeBold,
  BsTypeItalic,
  BsLink45Deg,
  BsCodeSlash,
  BsCameraVideo,
  BsMic,
  BsEmojiSmile,
} from "react-icons/bs";
import {
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiFillPlusCircle,
} from "react-icons/ai";
import { RiCodeBoxLine } from "react-icons/ri";
import { GoMention } from "react-icons/go";
import { CgFormatColor } from "react-icons/cg";
import { IoSendSharp } from "react-icons/io5";

function ChatList() {
  const [Chat, setChat] = useState("");
  console.log(Chat);

  const onChangeChat = (e) => {
    setChat(e.target.value);
  };

  //const [chosenEmoji, setChosenEmoji] = useState(false);

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      // 엔터키 누를때 값 전송
    }
  };
  return (
    <React.Fragment>
      <WSpace>
        <WSpaceTop>
          <WSpaceTopCon>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoM4RYRBwV1C1mUUOx-CAn3HPYdMNp5s4ag&usqp=CAU" />
            <span>유저닉네임</span>
          </WSpaceTopCon>
        </WSpaceTop>
      </WSpace>
      <ChatZone>
        {/* ---- map돌릴구간---- */}

        {/* ---- map돌릴구간---- */}
      </ChatZone>
      <ChatWrap>
        <form>
          <Toolbox>
            <Btn>
              <BsTypeBold style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <BsTypeItalic style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <BsLink45Deg style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <AiOutlineOrderedList style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <AiOutlineUnorderedList style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <BsCodeSlash style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <RiCodeBoxLine />
            </Btn>
          </Toolbox>
          <Textarea
            type="textarea"
            placeholder="내용을 입력해주세요."
            value={Chat}
            onChange={onChangeChat}
          />
          <Toolbox2>
            <Btn>
              <AiFillPlusCircle style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <BsCameraVideo style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <BsMic style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <BsEmojiSmile style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <GoMention style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <CgFormatColor style={{ marginRight: "12px" }} />
            </Btn>
          </Toolbox2>

          <Send onKeyPress={onCheckEnter}>
            <IoSendSharp />
          </Send>
        </form>
      </ChatWrap>
    </React.Fragment>
  );
}

const WSpace = styled.div`
  min-width: 79%;
  max-width: 89%;

  position: relative;
  background: #1a1d21;
  float: left;
`;

const WSpaceTop = styled.div`
  height: 50px;
  border-bottom: 1px solid #464646;
`;

const WSpaceTopCon = styled.div`
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding-left: 20px;
  padding-top: 12px;
  line-height: 27px;
`;

const UserProfile = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: white;
  float: left;
  margin-right: 10px;
  border: none;
`;
const ChatZone = styled.div`
  width: 100%;
  height: 73vh;
`;
const ChatOnce = styled.div`
  padding: 8px 20px;
  width: 100%;
  &:hover {
    background: #313438;
  }
  float: left;
`;

const ChatImg = styled.div`
  float: left;
`;
const ChatText = styled.div`
  float: left;
`;
const ChatUser = styled.div`
  margin-left: 10px;
`;
const ChatCon = styled.div`
  color: white;
  margin-left: 10px;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background: white;
  float: left;
`;

const ChatWrap = styled.div`
  min-width: 96%;
  max-width: 50%;
  height: 130px;
  border-radius: 8px;
  border: 1px solid #464646;
  background: #222529;
  position: relative;
  margin: 0 auto;
`;

const Toolbox = styled.div`
  width: 100%;
  height: 30px;
  color: #464646;
  font-size: 20px;
  display: flex;
  padding-left: 12px;
  padding-top: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 50px;
  background: none;
  border: none;
  font-size: 17px;
  font-weight: bold;
  padding-left: 15px;
  resize: none;
  color: white;
  &:focus {
    outline: none;
  }
`;

const Toolbox2 = styled.div`
  width: 100%;
  height: 30px;
  color: #464646;
  font-size: 20px;
  display: flex;
  padding-left: 12px;
  padding-bottom: 10px;
`;

const Btn = styled.div`
  border: none;
  background: none;
  cursor: pointer;
`;

const Send = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  color: #464646;
  font-size: 20px;
  position: absolute;
  top: 95px;
  right: 18px;
`;
export default ChatList;
