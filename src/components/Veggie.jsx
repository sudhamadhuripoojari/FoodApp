import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


const Veggie = () => {

    const [veggie, setVeggie] = useState([]);

    // Run when the component is mounted 
        useEffect(()=>{
            getVeggie();
        }, []);

    // Store data in LocalStaorage 
    const getVeggie = async()=>{
    const check = localStorage.getItem('veggie');
    if (check){
      setVeggie(JSON.parse(check));

    }
      // Fetch the Random recipes 
    else{
    // const getPopular = async () =>{
       const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=7ced41ad31f241928eae364d4bd8c5b3&number=9&tags=vegetarian`);
        const data = await api.json();
        localStorage.setItem('veggie', JSON.stringify(data.recipes));
        // console.log("data", data);
        setVeggie(data.recipes);
        console.log(data.recipes)
    }
  };

  return (
    <div>
        <Wrapper>
          <h3>Our Vegetarian</h3>
          <Splide
          options={{perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem', }}>
          {veggie.map((recipe)=>{
            return (
              <SplideSlide key={recipe.id}>
              <Card>
                <Link to = {'/recipe/' + recipe.id}>
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
  min-height: 15rem;
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




export default Veggie;
