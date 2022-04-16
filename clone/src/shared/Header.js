import React from 'react'
import '../App.css';
import styled from 'styled-components'
import Grid from '../elements/Grid';

function Header() {
  return (
    <Nan>
        {/* <Grid is_flex>
         <Search className='search' type="search" id="search" placeholder="검색어를 입력하세요."/>
            
         </Grid> */}

         <div className="box">
            <div className="container-1">
                 <span className="icon">🔍︎<i class="fa fa-search"></i></span>
            <input className="search" id="search" placeholder="Search..." />
             </div>
        </div>
    </Nan>
  )
}

const Nan = styled.div`
width : 100%;
height : 45px;
background : black;
border: 1px solid #464646 ;

`;


export default Header