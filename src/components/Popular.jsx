import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


const Popular = () => {

    const [popular, setPopular] = useState([]);

    // Run when the component is mounted 
        useEffect(()=>{
            getPopular();
        }, []);

    // Store data in LocalStaorage 
    const getPopular = async()=>{
    const check = localStorage.getItem('popular');
    if (check){
      setPopular(JSON.parse(check));

    }
      // Fetch the Random recipes 
    else{
    // const getPopular = async () =>{
       const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=44922d5dd9e54680a89ec9d35bf50bac&number=9`);
        const data = await api.json();
        localStorage.setItem('popular', JSON.stringify(data.recipes));
        // console.log("data", data);
        setPopular(data.recipes);
        console.log('Data', data.recipes)
    }
  };

  return (
    <div>
        <Wrapper>
          <h3> Popular Picks</h3>
          <Splide
          options={{perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem', }}>
          {popular.map((recipe)=>{
            return (
              <SplideSlide key={recipe.id}>
              <Card>
                <Link to = {'/recipe/'+ recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <h6>Price: {recipe.pricePerServing} KR</h6>
                <Gradient/>
                </Link>
              </Card>
              </SplideSlide>
            );
          })}
          </Splide>

        </Wrapper>
      
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 18rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  

   img{
    border-radius: 2rem;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    left: 0;
   }
p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0% );
  color: white;
  width:100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  height: 40%;
  justify-content:center;
  align-items: center;
}

h6{
  position: absolute;
  color:white;
  left: 26%;
  bottom: 5%;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  z-index:5;

}

`;
 const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
 `;


export default Popular;
