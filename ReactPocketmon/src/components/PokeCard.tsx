import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lazyimage from './Lazyimage';
import {Link} from'react-router-dom';
import { PokemonDataAndUrl } from '../types/PokemonData';
import { PokemonDetail } from '../types/PokemonDetail';

interface PokeData{
    id: number;
    type: string;
    name: string;
}

const PokeCard = ({ url, name }: PokemonDataAndUrl) => {
    const [pokemon, setPokemon] = useState<PokeData>();

    useEffect(() => {
        if (url) {
            fetchPokeDetailData();
        }
    }, [url]);

    async function fetchPokeDetailData() {
        try {
            const response = await axios.get(url);
            const pokemonData = formatPokemonData(response.data);
            setPokemon(pokemonData);
        } catch (error) {
            console.error(error);
        }
    }

    function formatPokemonData(params: <PokemonDetail>) {
        const { id, types, name } = params;
        const PokeData = {
            id,
            name,
            type: types[0].type.name,
        };
        return PokeData;
    }

    // pokemon이 존재할 때만 bg, border, text, img를 설정
    const bg = pokemon ? `bg-${pokemon.type}` : '';
    const border = pokemon ? `border-${pokemon.type}` : '';
    const text = pokemon ? `text-${pokemon.type}` : '';
    const img = pokemon ? `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` : '';

    return (
        <>
            {pokemon && (
                <Link
                    to={`/pokemon/${name}`}
                    className={`box-border rounded-lg ${border} w-[8.5rem] h-[8.5rem] z-0 bg-slate-800 flex flex-col justify-between items-center relative`}
                >
                    <div className={`absolute top-1 right-1 ${text} text-xs bg-gray-800 p-1 rounded`}>
                        #{pokemon.id.toString().padStart(3, '00')}
                    </div>
                    <div className={'w-full flex items-center justify-center flex-grow'}>
                        <div className={'box-border relative flex justify-center items-center h-[5.5rem] w-full'}>
                            <Lazyimage url={img} alt={name} />
                            <img className="object-contain h-full" />
                        </div>
                    </div>
                    <div className={`${bg} text-xs text-zinc-100 h-[1.5rem] rounded-b-lg uppercase`}>
                        {pokemon.name}
                    </div>
                </Link>
            )}
        </>
    );
}

export default PokeCard;
