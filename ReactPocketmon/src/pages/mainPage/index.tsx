import { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from '../../components/PokeCard';
import AutoComplete from '../../components/AutoComplete';
import DamageModal from '../../components/DamageModal';
import { PokemonData, PokemonDataAndUrl } from '../../types/PokemonData';

function MainPage() {
  // 모든 포켓몬 데이터를 가지고 있는 state
  const [allPokemons, setAllPokemons] = useState<PokemonDataAndUrl[]>([]);
  
  // 실제로 리스트로 보여주는 포켓몬 데이터를 가지고 있는 state
  const [displayedPokemons, setDisplayedPokemons] = useState<PokemonDataAndUrl[]>([]);
  
  // 검색어 상태
  const [searchTerm, setSearchTerm] = useState("");

  // 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 한번에 보여지는 포켓몬 수
  const limitNum = 20;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0`;

  const fetchPokeData = async () => {
    try {
      const response = await axios.get<PokemonData>(url);
      if (response.data && response.data.results) {
        setAllPokemons(response.data.results);
        setDisplayedPokemons(response.data.results.slice(0, limitNum)); // 초기 포켓몬 데이터 설정
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.error("Failed to fetch Pokemon data:", error);
    }
  };

  useEffect(() => {
    fetchPokeData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredPokemons = allPokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedPokemons(filteredPokemons);
    } else {
      setDisplayedPokemons(allPokemons.slice(0, limitNum)); // 검색어가 없을 때 초기 데이터 보여주기
    }
  }, [searchTerm, allPokemons]);

  return (
    <article className='pt-6'>
      <header className='flex flex-col gap-2 w-full px-4 z-50'>
        <AutoComplete
          allPokemons={allPokemons}
          setSearchTerm={setSearchTerm}
        />
      </header>
      <section className='pt-6 flex flex-col justify-content items-center overflow-auto z-0'>
        <div className='flex flex-row flex-wrap gap-[16px] items-center px-2 max-w-4xl'>
          {displayedPokemons.length > 0 ? 
            displayedPokemons.map(({ url, name }, index) => (
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
        {allPokemons.length > displayedPokemons.length && (
          <button
            onClick={() => setDisplayedPokemons(prev => [
              ...prev, 
              ...allPokemons.slice(prev.length, prev.length + limitNum)
            ])} 
            className='bg-slate-800 px-6 py-2 my-4 text-base rounded-lg font-bold text-white'>
            더보기
          </button>
        )}
      </div>
      {/* 모달 열기 및 닫기 버튼 */}
      <div className='text-center'>
        <button
          onClick={() => setIsModalOpen(true)} 
          className='bg-blue-500 px-4 py-2 rounded-lg text-white'>
          모달 열기
        </button>
      </div>
      
      {/* 모달 항상 출력 */}
      {isModalOpen && (
        <DamageModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </article>
  );
}

export default MainPage;
