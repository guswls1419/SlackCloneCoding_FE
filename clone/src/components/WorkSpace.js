import React from 'react'
import styled from 'styled-components';
import { AiOutlineDown } from "react-icons/ai";


function WorkSpace() {
  return (
    <WSpace>
      <WSpaceTop>
        <WSpaceTopCon>내용이들어감<Span><AiOutlineDown/></Span>
        <Writing>
          <Img src='https://us.123rf.com/450wm/martialred/martialred1507/martialred150700949/42621673-%EC%95%B1-%EB%B0%8F-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9D%98-%EB%A9%94%EC%8B%9C%EC%A7%80-%EC%A4%84-%EC%95%84%ED%8A%B8-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%9E%91%EC%84%B1.jpg?ver=6'/>
        </Writing>
        </WSpaceTopCon>
      </WSpaceTop>
    </WSpace>
  )
}

const WSpace = styled.div`
min-width : 20%;
position: relative;
background : #1a1d21;
`;

const WSpaceTop = styled.div`
height : 50px;
border-bottom: 1px solid #464646 ;
`;

const WSpaceTopCon=styled.div`
color : white;
font-weight : bold;
font-size : 16px;
padding: 14px;
`;

const Span =styled.span`
color : white;
font-weight : bold;
font-size : 13px;
margin-left : 7px;
text-align : center;
position : relative;
top : 2px;
`;

const Writing =styled.div`
width : 33px;
height : 33px;
background-color:white;
border-radius : 50px;
position : absolute;
left: 85%;
top : 9px;
`;

const Img = styled.img`
background: currentColor;
display: block;
flex-shrink: 0;
height: 1.3em;
width: 1.3em;
border-radius:50px;
margin: 0 auto;
padding-top : 5px;
`;
export default WorkSpace;