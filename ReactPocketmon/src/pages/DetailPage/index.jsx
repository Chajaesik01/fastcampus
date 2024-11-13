import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DeatailPage = () => {
  const [pokemonData, setPokemonData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const pokemonID = params.id;
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  
  useEffect(() => {
    fetchPokemonData();
  }, []);

  async function fetchPokemonData() {
    const url = `${baseUrl}${pokemonID}`;
    try {
      const { data: pokemonData } = await axios.get(url);
      if (pokemonData) {
        const { name, id, types, weight, height, stats, abilities } = pokemonData;
        const nextAndPreviousPokemon = await getNextAndPreviousPokemon(id);
        
        const DamageRelations = await Promise.all(
          types.map(async (i) => {
            const type = await axios.get(i.type.url);
            return type.data.damage_relations;
          })
        );

        const formattedPokemonData = {
          id: id,
          name: name,
          weight: weight / 10,
          height: height / 10,
          previous: nextAndPreviousPokemon.previous,
          next: nextAndPreviousPokemon.next,
          abilities: formatPokemonAbilities(abilities),
          stats: formatPokemonStats(stats),
          DamageRelations: DamageRelations, // 변수명 수정
        };
        setPokemonData(formattedPokemonData);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  const formatPokemonStats = (stats) => {
    return stats.map(({ base_stat, stat }) => ({
      name: stat.name.charAt(0).toUpperCase() + stat.name.slice(1), // 첫 글자 대문자로
      baseStat: base_stat,
    }));
  };

  const formatPokemonAbilities = (abilities) => {
    return abilities
      .filter((_, index) => index <= 1)
      .map((obj) => obj.ability.name.replaceAll('-', ' '));
  };

  async function getNextAndPreviousPokemon(id) {
    const urlPokemon = `${baseUrl}?limit=1&offset=${id - 1}`;
    
    try {
      const { data: pokemonData } = await axios.get(urlPokemon);
      const nextResponse = pokemonData.next ? await axios.get(pokemonData.next) : null;
      const previousResponse = pokemonData.previous ? await axios.get(pokemonData.previous) : null;
  
      return {
        next: nextResponse?.data?.results?.[0]?.name || null,
        previous: previousResponse?.data?.results?.[0]?.name || null,
      };
    } catch (error) {
      console.error("Error fetching next and previous Pokemon:", error);
      setIsLoading(false);
      return { next: null, previous: null };
    }
  }

  if (isLoading) {
    return (
      <div className=
        {'absolute h-auto w-auto top-1/3 -translate-x-1/2 left-1/2 z-50'}>
          <Loading className='w-12 h-12 z-50 animate-spin text-slate-900'/>      
      </div>
    );
  }

  if(!isLoading && !pokemon){
    return (
      <div>...not Found</div>
    )
  }

  const img = pokemon ? `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` : '';
  const bg = `bg-${pokemon?.types?.[0]}`;
  const text = `text-${pokemon?.types?.[0]}`;

  return (
    <article className='flex items-center gap-1 flex-col w-full'>
      <div className={
        `${bg} w-auto h-full flex flex-col z-0 items-center justify-end relative overflow-hidden`
      }>

        {pokemon.previous && {
          <Link className = 'absolute op-[40%] -translate-y-1/2 z-50 left-1'
          to={`/pokemon/${pokemon.previous}`}></div>
            <LessThan className= 'w-5 h-8 p-1'/>
          </Link>
        }}

        {pokemon.next && {
          <Link className = 'absolute op-[40%] -translate-y-1/2 z-50 left-1'
          to={`/pokemon/${pokemon.next}`}></div>
            <LessThan className= 'w-5 h-8 p-1'/>
          </Link>
        }}

        <section className='w-full flex '>

          <img src = {img} width="100%" height="auto" 
          loading="lazy" alt= {pokemon.name}
          className={'object-contain h-full'}/>

        </section>
      </div>
    </article>
  );
};

export default DeatailPage;
