import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion'; // Allows to do some animations
import { Link, useParams} from 'react-router-dom'; // useparams allows to pull the keyword from URL

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async(name)=>{
    const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=7ced41ad31f241928eae364d4bd8c5b3&number=10&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
    // console.log('recipes', recipes.results)
  };

  useEffect(()=>{
    getCuisine(params.type);
    console.log(params.type)
  }, [params.type]);


  return ( 
     <Grid>
       {cuisine.map((item)=>{
        console.log('cuisine', cuisine)
         return(
           <Card key={item.id}>
            <img src={item.image} alt={item.title} />
             <h4> {item.title} </h4>
           </Card>
         )
       })}
     </Grid>
   )
  }

 const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
   grid-gap:3rem;
 `;

 const Card = styled.div`

    img{
    border-radius: 2rem;
    width: 100%;
    }

    a{
     text-decoration: none;
    }
    h4{
     text-align: center;
     padding: 1rem;
   }
    `;

export default Cuisine;