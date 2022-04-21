import React from 'react'
import '../App.css';
import styled from 'styled-components'
import Grid from '../elements/Grid';
import { BiTime } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
//import HeaderModal from './HeaderModal';

function Header() {
  return (
    <Nan >
      
         <div className="box">
         <BiTime style={{color:"white",fontSize:"23px",position:"relative", top:"10px", left: "28%"}}/>
            <div className="container-1">
                 <span className="icon">🔍︎<i class="fa fa-search"></i></span>
            <input className="search" id="search" placeholder="Search..." />
             </div>
             <ProfileBox>
                <AiOutlineQuestionCircle style={{color:"white",fontSize:"23px",marginRight:"12px"}}/>
                <UserProfile src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoM4RYRBwV1C1mUUOx-CAn3HPYdMNp5s4ag&usqp=CAU"/>
                {/* <HeaderModal/> */}
             </ProfileBox>
        </div>
        
    </Nan>
  )
}

const Nan = styled.div`
width : 100%;
height : 45px;
background : black;
border: 1px solid #464646 ;
float:left;
`;
const UserProfile = styled.img`
  width : 27px;
  height : 27px;
  border-radius : 4px;
  background : white;
  margin-top : -1px;
  border : none;
  &:hover{
    background: rgba(255, 255, 255, 0.1);
  }
  `;

const ProfileBox = styled.div`
width : 300px;
height : 30px;
position : relative;
top : -53px;
left : 95%;
`;


export default Header
