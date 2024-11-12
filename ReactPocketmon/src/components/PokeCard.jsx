import React, {useEffect, useState} from 'react'
import axios from 'axios'

const PokeCard = ({url, name}) => {

    const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchPokeDetailData();
  }, [url])

  async function fetchPokeDetailData() {
    try{
        const response = await axios.get(url);
        console.log(response.data);
        const pokemonData = formatPokemonData(response.data)
        setPokemon(pokemonData);
    }catch (error){
        console.error(error);
    }
  }

  function formatPokemonData(params){
    const {id, types, name} = params;
    const PokeData = {
        id,
        name,
        type: types[0].type.name
    }
    return PokeData;
  }
  return (
    <div>PokeCard</div>
  )
}

export default PokeCard