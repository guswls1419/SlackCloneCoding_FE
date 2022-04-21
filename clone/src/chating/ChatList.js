import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { useHistory, useParams } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import { Picker } from "emoji-mart";  
import "emoji-mart/css/emoji-mart.css";  
import { useSelector } from "react-redux";
// import SockJS from "sockjs-client";
// import { over } from "stompjs";
// var stompClient = null;

function ChatList(props) {
  const { list, sendMessage, scrollbarRef, } = props;
  console.log(list);

  const param = useParams();


  const [chatMessage, setChatMessage] = useState("");
 const history = useHistory();
  // useEffect(() => {
  //   stompClient.disconnect();
  // }, []);

  // const clickBtn = (e) => {
  //     if(e.key === 'Enter') {
  //     sendMessage(`${param.id}`, chatMessage);
     
  // };     
  
  //이모지
  const addEmoji = (e) => {  
    let sym = e.unified.split("-");  
    let codesArray = [];  
    sym.forEach((el) => codesArray.push("0x" + el));  
    let emoji = String.fromCodePoint(...codesArray);  
    setChatMessage(chatMessage + emoji);  
  };  
//이모지 버튼 스위치
const [emoji, setEmoji] = useState(false);
 
const openEmoji = () => {
    setEmoji(emoji===false? true:false);
  };

//   const dmList = useSelector((state)=>state.dm)
// console.log(dmList)



  return (
    <React.Fragment>
      <WSpace>
        <WSpaceTop>
          <WSpaceTopCon>
            {/* <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoM4RYRBwV1C1mUUOx-CAn3HPYdMNp5s4ag&usqp=CAU" /> */}
            <span style={{marginLeft:"5px",lineHeight:"38px",fontSize:"20px"}}>채팅창</span>
          </WSpaceTopCon>
        </WSpaceTop>
      </WSpace>
      <ChatZone>
        {/* <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onscroll}> */}
        {/* ---- map돌릴구간---- */}
        {list.map((item, index) => {
          return (
            <ChatOnce key={index}>
              <ChatImg className="ChatImg">
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoM4RYRBwV1C1mUUOx-CAn3HPYdMNp5s4ag&usqp=CAU" />
              </ChatImg>
              <ChatText className="ChatText">
                <ChatUser className="ChatUser">
                  <b style={{ float: "left", color: "#fff" }}>{item.nick}</b>
                  {/* <span style={{ color: "#fff" }}>시간</span> */}
                </ChatUser>
                <ChatCon>{item.text}</ChatCon>
              </ChatText>
            </ChatOnce>
          );
        })}
        {/* ---- map돌릴구간---- */}
        {/* </Scrollbars> */}
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
            type="text"
            placeholder="내용을 입력해주세요."
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value) }
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
            <Btn onClick={openEmoji}>
              <BsEmojiSmile style={{ marginRight: "12px" }} />
              {emoji===true?<Picker style={{position:"absolute", bottom:"30px", left:"15px"}} onSelect={addEmoji} />  :null}
            </Btn>
            <Btn>
              <GoMention style={{ marginRight: "12px" }} />
            </Btn>
            <Btn>
              <CgFormatColor style={{ marginRight: "12px" }} />
            </Btn>
          </Toolbox2>
          
          <Send onClick={()=> sendMessage(`${param.id}`, chatMessage)}>
            <IoSendSharp />
          </Send>
        </form>
      </ChatWrap>
    </React.Fragment>
  );
}
const WSpace = styled.div`
  min-width: 100%;
  max-width: 50%;
  position: relative;
  background: #1a1d21;
  clear: both;
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
  padding-top: 8px;
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
  height: 73vh;
  overflow: auto;
`;
const ChatOnce = styled.div`
  padding: 8px 0px 8px 20px;
  width: 98%;
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
//수정
const Textarea = styled.input`
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
  position: relative;
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
