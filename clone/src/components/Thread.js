import React from 'react'
import styled from 'styled-components';


function Thread() {
  return (
    <WSpace>
      <WSpaceTop>
        <WSpaceTopCon>스레드</WSpaceTopCon>
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
padding: 14px;
padding-left: 20px;
`;

export default Thread;