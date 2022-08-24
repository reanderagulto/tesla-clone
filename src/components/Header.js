import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { Provider, useSelector } from 'react-redux';

function Header() {
  const [ burgerStatus, setBurgerStatus ] = useState(false);

  const cars = useSelector(selectCars);

  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt="Tesla"/>
        </a>
        <Menu>
          {
            cars && cars.map((car, index) => (
                <a key={ index } href="#">{ car }</a>  
            ))
          }
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenuIcon 
              onClick={ props => setBurgerStatus(true) }
            />
        </RightMenu>
          <BurgerNav show={ burgerStatus }>
              <CloseWrapper>
                  <CustomClose onClick={ props => setBurgerStatus(false) }/>
              </CloseWrapper>
              {
                cars && cars.map((car, index) => (
                    <li key={ index } ><a href="#">{ car }</a></li>
                ))
              }
          </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0; 
    left: 0;
    right: 0;
    z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
  }

  @media(max-width: 768px){
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
      font-weight: 600;
      text-transform: uppercase;
      flex-wrap: nowrap;
      margin-right: 10px;
  }
`;
const CustomMenuIcon = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0; 
  bottom: 0;
  background-color: #fff;
  width: 300px;
  list-style: none;
  text-transform: uppercase; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.3s ease-in-out;
  transform: ${ props => props.show ? 'translateX(0%)' : 'translateX(100%)' };
  
  li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      a{
        font-weight: 600;
      }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  

`;
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;