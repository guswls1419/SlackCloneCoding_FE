import React from 'react'
import styled from 'styled-components'
import Chat from './Chat';

function ChatList() {
  return (
    <ChatZone>
        {/* 채팅데이터 받아서 map돌릴 부분 */}
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        
    </ChatZone>
  )
}
const ChatZone = styled.div`
width : 100%;
height : 73vh;
`;

export default ChatList