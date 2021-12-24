import React, {useState ,useEffect} from "react";
import PokemonCard from "./components/PokemonCard";
import axios from "axios";
import "./styles/Header.css";
import "./styles/pokemon-container.css";

function App() {
  const [pokemon, UsePokemon] = useState([{}]);
 
  const FetchPokemons = async () => {
    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118");
      UsePokemon(response.data.results);
    }
    catch(err){
      console.log(err); 
    }
  }
 
  useEffect( () => {
    FetchPokemons();
  },[]);
  
 
  return (
  <>
     <header>
        <h1>Poke client</h1>  
     </header>
      <div className = "pokemon-container"> 
        {pokemon ? pokemon.map((element, index) => <PokemonCard name = {element.name} key = {index} />) : undefined}
      </div>
  </>
  );
}

export default App;
