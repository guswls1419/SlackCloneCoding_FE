import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import WorkSpace from './WorkSpace'

function MenuList() {
  return (
    <DmWrap>
      <WorkSpace/>
       <Menu />
    </DmWrap>
  )
}

const DmWrap = styled.div`
min-width : 20%;
max-width : 10%;
height : 100vh;
border-right: 1px solid #464646 ;
border-left: 1px solid #464646 ;
float : left;
`;

export default MenuList