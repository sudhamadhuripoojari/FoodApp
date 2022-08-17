import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';


const Searched = () => {

    const [searchedReceipes, setSearchedReceipes]= useState([]);
    const params = useParams();

    const getSearched = async(name)=>{
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=7ced41ad31f241928eae364d4bd8c5b3&number=10&query=${name}`);
        const recipes = await data.json();
        setSearchedReceipes(recipes.results);
        // console.log('recipes', recipes.results)
      };

      useEffect(()=>{
        getSearched(params.search);
      }, [params.search])


  return (
    <Grid>
      {searchedReceipes.map((item)=>{
        return(
            <Card key={item.id}>
              <Link to= {'/recipe/'+ item.id}>
            <img src={item.image} alt={item.title} />
             <h4> {item.title} </h4>
             </Link>
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


export default Searched
