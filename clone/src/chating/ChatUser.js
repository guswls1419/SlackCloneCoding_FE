import React from 'react'
import styled from 'styled-components';


function ChatUser() {
  return (
    <WSpace>
      <WSpaceTop>
        <WSpaceTopCon>
            <UserProfile/>
            <span>유저닉네임</span>
        </WSpaceTopCon>
      </WSpaceTop>
    </WSpace>
  )
}

const WSpace = styled.div`
min-width: 79%;
max-width: 89%;
position: relative;
background : #1a1d21;
float: left;
`;

const WSpaceTop = styled.div`
height : 50px;
border-bottom: 1px solid #464646 ;
`;

const WSpaceTopCon=styled.div`
color : white;
font-weight : bold;
font-size : 16px;
padding-left: 20px;
padding-top: 12px;
line-height : 27px;
`;

const UserProfile = styled.img`
width : 25px;
height : 25px;
border-radius : 5px;
background : white;
float:left;
margin-right : 10px;
border : none;
`;


export default ChatUser;