
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Searchbar from "./components/Searchbar";
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi';
import { Link } from "react-router-dom";

function App() {
  return (
   
    <div className="App">
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={'/'}> yummilicious </Logo>
    </Nav>
    <Searchbar/>
     <Category/>
     <Pages/>
     </BrowserRouter>
    </div>
    
  );
}



const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Lobster Two', cursive;
  background: -webkit-linear-gradient(#f27121, #e94057);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;
export default App;
