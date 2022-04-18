import React from 'react'
import Grid from '../elements/Grid'
import MenuList from '../components/MenuList';
import styled from 'styled-components';
import Header from '../shared/Header';
import Detaill from  '../components/Detaill'
import Thread from '../components/Thread'

function DirectMessage() {
  return (
    <Wrap>
      <Grid>
        <Header/>
          <MenuList/>
          <Thread/>
          <Detaill/>
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

export default DirectMessage