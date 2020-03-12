import React,{useEffect,useState} from 'react';
import Recipes from './recipes';
import { GiKnifeFork } from "react-icons/gi";
import {Navbar,Nav,Button,FormControl,Form} from 'react-bootstrap';



// import {BrowserRouter,Route , Switch} from 'react-router-dom';





const App = () => {
  
  const appId = "443128ff";
  const appKey= "98f479697e754e8e957f7c4de22523de";
  
  
  const [Recipe , setRecipe] = useState([]);
  const [search, setSearch]= useState('');
  const [query,setQuery] =useState('chicken')
  
  //called each time page renders so getRecipe called once and each time for query changes
  useEffect(()=>{
    getRecipe();
  },[query]);


  //Request Api
  const getRecipe = async ()=> {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
   
    setRecipe(data.hits);
    console.log(data.hits);
}
 


const updateSerach= e => {
   const value = e.target.value;
  
     setSearch(value);
   
  
 }
 const getSearch = e => {
   e.preventDefault();
   setQuery(search);
   setSearch('');

  }


  return(
<>
  <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home"><GiKnifeFork style={{height:"90px" ,width:"90px"}}  />Recipe Search App</Navbar.Brand>
          <Nav className="mr-auto">
           
            
          </Nav>
      
      <Form inline onSubmit={getSearch}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={updateSerach} />
        <Button  style={{color:"white"}} type="submit" variant="outline-info">Search</Button>
      </Form>
  </Navbar>
     
   
    
     <div className="recipes">
          
            {Recipe.map(Rec =>(
              <Recipes Key={Rec.index} Re={Rec.recipe}/> 
              ))}
      </div>
</>
   
  );
  }
export default App;  
