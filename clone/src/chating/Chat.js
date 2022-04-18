import React from 'react'
import styled from 'styled-components'
import ChatBox from './ChatBox';
import ChatList from './ChatList';

// if (!userDate || !myData){
//     return null;
// }

function Chat() {
    //const user = data.Sender // 디엠보낸사람
    return (
        <ChatWrap>            
            <div className='chat-img'>
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoM4RYRBwV1C1mUUOx-CAn3HPYdMNp5s4ag&usqp=CAU"/>
            <div className='chat-text'>
                <div className='chat-user'>
                    <b style={{float:"left", color:"#fff"}}>유저닉네임</b>
                    <span style={{color:"#fff"}}>시간</span>
                </div>
            </div>
            <p style={{color:"#fff"}}>content</p>
            </div>
        </ChatWrap>
    )
}

const ChatWrap = styled.div `
padding : 8px 20px;
&:hover {
    background :  #313438;
}
`;

const Img = styled.img`
    width :36px;
    height: 36px;
    border-radius : 5px;
    background : white;
    float:left; 
    `;


// const UserProfile = styled.img`
// width : 25px;
// height : 25px;
// border-radius : 5px;
// background : white;
// float:left;
// margin-right : 10px;
// border : none;
// `;


export default Chat