
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Searchbar from "./components/Searchbar";

function App() {
  return (
   
    <div className="App">
    <BrowserRouter>
    <Searchbar/>
     <Category/>
     <Pages/>
     </BrowserRouter>
    </div>
    
  );
}


export default App;
