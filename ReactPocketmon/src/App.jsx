import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import PokeCard from './components/PokeCard'

function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';
  // offset 0 ~ 1008 0 ~ 20 21 ~ 41 ... 페이지 네이션을 위한 작업
  const [pokemons, setPokemons] = useState([]);
  
  const fetchPokeData = async () => {
    try{
      const response = await axios.get(url);
      setPokemons(response.data.results)
    } catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    //API -> response -> state update -> component rerender -> component
    fetchPokeData();
  }, [])


  return (
    <article className='pt-6 '>
      <header className='flex flex-col gap-2 w-full px-4 z-50'>
        Input form
      </header>
      <section className='pt-6 flex flex-col justify-content items-center overflow-auto z-0'>
  <div className='flex flex-row flex-wrap gap-[16px] items-center px-2 max-w-4xl'>
    {pokemons.length > 0 ? 
        pokemons.map(({ url, name }, index) => (
            <PokeCard key = {url} url = {url} name = {name}/>
        )) :
        (
          <h2 className='font-medium text-lg text-slate-100'>
            포켓몬이 없습니다.
          </h2>
        )}
      </div>
      </section>
    </article>
  )
}

export default App
