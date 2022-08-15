import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks, GiHotSpices} from 'react-icons/gi';
import {BiDish} from 'react-icons/bi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <List>
        <SLink to = {'/cuisine/Indian'}>
        <GiHotSpices/>
        <h4> Indian </h4>
      </SLink>
      <SLink to = {'/cuisine/Nordic'}>
        <BiDish/>
        <h4> Nordic </h4>
      </SLink>
      <SLink to = {'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4> Italian </h4>
      </SLink>
      <SLink to = {'/cuisine/American'}>
        <FaHamburger/>
        <h4> American </h4>
      </SLink>
      <SLink to = {'/cuisine/Thai'}>
        <GiNoodles/>
        <h4> Thai </h4>
      </SLink>
    </List>
  )
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;

`;

const SLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width:6rem;
  height:6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4{
    font-size: 0.8rem;
    color: white;
  }

  svg{
    color: white;
    font-size: 1.6rem;
  }

  &.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4{
      color: white;
    }
  }
`;



export default Category;
