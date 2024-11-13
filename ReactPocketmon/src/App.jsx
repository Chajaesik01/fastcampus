import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage'; // 오타 수정
import MainPage from './pages/mainPage';
const App = () => {

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countVariable = 0;
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });
  
  const increaseRef = () => {
    countRef.current +=1;
  }

  const increaseState = () => {
    setCount(prev => prev + 1);
  }

  const increaseVariable = () => {
    countVariable+=1;
  }
  <p>Ref { countRef.current</p> // 0
  <p>State {count</p> //0
  <p>Variable {count} </p>

    <button onClick={increaseRef}>Ref +</button>
    <button onClick={increaseState}>State + </button>
    <button onClick={increaseVariable}>Variable +</button>





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} /> {/* 오타 수정 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
