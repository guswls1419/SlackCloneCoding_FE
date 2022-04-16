import React, { useState } from 'react'
import '../App.css'
import styled from 'styled-components'
import { AiOutlineMessage,AiOutlineMore,AiFillCaretDown } from "react-icons/ai";
import { BsAt } from "react-icons/bs";
import { BiMerge,BiLockAlt } from "react-icons/bi";

const Menu = (props) => {

  const [Change,setChange] = useState(false);


  const MouseEnter = () => {
    setChange(Change ===false ? true : false)
  }


  return (
    <ul style={{marginTop :"16px"}}>
      <LiStyle><AiOutlineMessage style={{marginRight :"5px"}}/> 스레드</LiStyle>
      <LiStyle><BsAt style={{marginRight :"5px"}}/>멘션 및 반응</LiStyle>
      <LiStyle><BiMerge style={{marginRight :"5px"}}/>Slack Connect</LiStyle>
      <LiStyle><AiOutlineMore/> 더 보기</LiStyle>
      <br/>

      {/* 채널 */}
      <DmMsg onmouseenter={MouseEnter} Change={Change}><AiFillCaretDown style={{marginRight :"5px"}}/>채널</DmMsg>
      <LiStylePadding><BiLockAlt style={{marginRight :"5px"}}/>채널1</LiStylePadding>
      <LiStylePadding><BiLockAlt style={{marginRight :"5px"}}/>채널2</LiStylePadding>
      <LiStylePadding><BiLockAlt style={{marginRight :"5px"}}/>채널3</LiStylePadding>
      <LiStylePadding><BiLockAlt style={{marginRight :"5px"}}/>채널4</LiStylePadding>
      <div>
        <Plus>+</Plus>
        <LiStyle>채널 추가</LiStyle>
      </div>
      <br/>

      {/* 메신저 */}
      <DmMsg><AiFillCaretDown style={{marginRight :"5px"}}/>다이렉트 메시지</DmMsg>
      <div>
        <UserProfile></UserProfile>
        <LiStylePadding >유저유저</LiStylePadding>
      </div>
      <div>
        <UserProfile></UserProfile>
        <LiStylePadding >유저222</LiStylePadding>
      </div>
      <div>
        <UserProfile></UserProfile>
        <LiStylePadding >유저33</LiStylePadding>
      </div>
      <div>
        <Plus>+</Plus>
        <LiStylePadding>팀원 추가</LiStylePadding>
      </div>
    </ul>
  )
}

const UserProfile = styled.button`
width : 20px;
height : 20px;
border-radius : 5px;
background : white;
float:left;
margin-right : 10px;
margin-left : 24px;
margin-top : 4px;
border : none;
`;

const Plus = styled.button`
width : 20px;
height : 20px;
border-radius : 5px;
background : #313438;
float:left;
margin-right : 10px;
margin-left : 24px;
margin-top : 4px;
text-align:center;
line-height: 20px;
border : none;
`;

const LiStyle = styled.li`
padding-left: 16px;
height : 28px;
line-height: 28px;
cursor: pointer;
color : white;
list-style : none;
&:hover{
  background-color: black;
}
`;

const LiStylePadding = styled.li`
padding-left: 26px;
height : 28px;
line-height: 28px;
cursor: pointer;
color : white;
list-style : none;
&:hover{
  background-color: black;
}
`;

const DmMsg = styled.li`
padding-left: 16px;
height : 28px;
line-height: 28px;
cursor: pointer;
color : white;
color:${(props)=>props.Change ===true ? "#F5C820":"#f5f5f5"};
list-style : none;

`;
export default Menu;