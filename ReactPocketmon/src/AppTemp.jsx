// 20개씩 가져오기

import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import PokeCard from './components/PokeCard';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchPokeData = async (isFirstFetch) => {
    try {
      const offsetValue = isFirstFetch ? 0 : offset + limit;
      const url = `https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0`;
      const response = await axios.get(url);
      
      if (response.data.results) {
        setPokemons([...pokemons, ...response.data.results]);
        setOffset(offsetValue);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokeData(true);
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearchInput(debouncedSearchTerm);
    } else {
      fetchPokeData(true);
    }
  }, [debouncedSearchTerm]);

  const handleSearchInput = async (searchValue) => {
    if (searchValue.length > 0) {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
        const pokemonData = {
          url: response.data.url,
          name: response.data.name,
        };
        setPokemons([pokemonData]);
      } catch (error) {
        setPokemons([]);
        console.log(error);
      }
    }
  };

  return (
    <article className='pt-6'>
      <header className='flex flex-col gap-2 w-full px-4 z-50'>
        <div className='relative z-50'>
          <form className='relative flex justify-center items-center w-[20.5rem] h-6 rounded-lg m-auto'>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='text-xs w-[20.5rem] h-6 px-2 py-1 rounded-lg text-center bg-[hsl(214,13%,47%)]'
            />
            <button
              type="button" // button type을 'button'으로 변경
              className='text-xs bg-slate-900 text-slate-300 w-[2.5rem] h-6 px-2 rounded-r-lg text-center absolute right-0 hover:bg-slate-700'>
              검색
            </button>
          </form>
        </div>
      </header>
      <section className='pt-6 flex flex-col justify-content items-center overflow-auto z-0'>
        <div className='flex flex-row flex-wrap gap-[16px] items-center px-2 max-w-4xl'>
          {pokemons.length > 0 ? 
            pokemons.map(({ url, name }, index) => (
              <PokeCard key={url} url={url} name={name} />
            )) :
            (
              <h2 className='font-medium text-lg text-slate-100'>
                포켓몬이 없습니다.
              </h2>
            )}
        </div>
      </section>
      <div className='text-center'>
        <button
          onClick={() => fetchPokeData(false)} 
          className='bg-slate-800 px-6 py-2 my-4 text-base rounded-lg font-bold text-white'>
          더보기
        </button>
      </div>
    </article>
  );
}

export default App;
