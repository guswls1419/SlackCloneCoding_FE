import React from 'react'
import Grid from '../elements/Grid'
import MenuList from '../components/MenuList';
import styled from 'styled-components';
import Header from '../shared/Header';
import Chat from  '../chating/Chat'
import Thread from '../components/Thread'
import ChatUser from '../chating/ChatUser';
import ChatList from '../chating/ChatList';
import ChatBox from '../chating/ChatBox';


function ChatDetaill() {
  return (
    <Wrap>
      <Grid>
        <Header/>
          <MenuList/>
          <ChatUser/>
          <ChatWrap>            
            <ChatList/>
            <ChatBox/>
        </ChatWrap>
      </Grid>
    </Wrap>
  )
}

const Wrap = styled.div`
width : 100vw;
height : 100vh;
background: #1a1d21;
overflow:hidden;

`;
const ChatWrap = styled.div `
float : left;
overflow: hidden;
height : 100vh;
min-width: 79%;
max-width: 89%;

`;

export default ChatDetaill