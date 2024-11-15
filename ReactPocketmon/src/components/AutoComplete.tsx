import React, { useState } from 'react';
import { PokemonDataAndUrl } from '../types/PokemonData';

interface AutoCompleteProps {
    allPokemons: PokemonDataAndUrl[],
    setSearchTerm: React.Dispatch<React.SetStateAction<PokemonDataAndUrl[]>>
}
const AutoComplete = ({ allPokemons, setSearchTerm }) => {
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            // 입력된 값이 포켓몬 이름의 시작 부분에 포함된 경우를 필터링
            const filteredSuggestions = allPokemons.filter(pokemon =>
                pokemon.name.toLowerCase().startsWith(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.name);
        setSuggestions([]);
    };

    return (
        <div className='relative z-50'>
            <input
                type="text"
                onChange={handleChange}
                className='text-xs w-[20.5rem] h-6 px-2 py-1 rounded-lg text-center bg-[hsl(214,13%,47%)]'
            />
            {suggestions.length > 0 && (
                <ul className='absolute z-10 w-full bg-white border border-gray-300 rounded-lg'>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleSuggestionClick(suggestion)}
                                className='w-full text-left p-2 hover:bg-gray-200'
                            >
                                {suggestion.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoComplete;
