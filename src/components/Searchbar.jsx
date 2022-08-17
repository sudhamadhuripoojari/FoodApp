import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Searchbar = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    // EventHandler after submiting the search
    const submitHandler = (e)=>{
        e.preventDefault(); // this prevents the defaultaction ie, stops refreshing the page after submit
        navigate('/searched/'+ input);
    
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}/>
        {/* <h1>{input}</h1>  For Testing the dynamic input text */}
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    
    div{
    position: relative; // Because to add icons on top of searchbar
    width: 100%;
   }
   svg{
        position: absolute;
        top:50%;
        left:0%;
        transform: translate(100%, -50%);
        color:white;
    }
    input{
        border:none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color:white;
        bottom: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        padding: 1rem 3rem;

    }

  
`;


export default Searchbar;
