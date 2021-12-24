import React, {useState} from "react";
import axios from "axios";
import "../styles/card-pokemon.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PokemonCard = props => {
    const [show, UseShow] = useState(false);
    const [image, UseImage] = useState("");
    const [type, UseType] = useState([]);
    const [abilities, UseAbilities] = useState([]);
   // const [moves, UseMoves] = useState([{}]);

    const OnClickShow = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
        const pokemon = response.data;
        UseImage(pokemon.sprites.front_default);
        UseType(pokemon.types.map( element => element.type.name));
        UseAbilities(pokemon.abilities.map(element => element.ability.name));
        UseShow(true);
    }
    const OnClickClose = () => UseShow(false);

    return(
       <>
        <div className="card-pokemon" onClick = {OnClickShow}>  
            <h2>{props.name}</h2>
        </div>
        <Modal show = {show}>
            <Modal.Header>
                <h2>Pokemon Description</h2>
                <button className="btn btn-secondary btn-close" onClick = {OnClickClose}></button>
            </Modal.Header>
            <Modal.Body>
                <img src={image} alt="pokemon" />
                <h2>Type: {type ? type.join(","): undefined}. </h2>
                <h2>Abilities: {abilities ? abilities.join(",") : undefined}.</h2>
            </Modal.Body>
        </Modal>
       </>
    );
}

export default PokemonCard;