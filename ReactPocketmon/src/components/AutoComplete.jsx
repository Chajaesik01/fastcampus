import React, { useState } from 'react';

const AutoComplete = ({ allPokemons, setSearchTerm }) => {
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            const filteredSuggestions = allPokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(value.toLowerCase())
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
