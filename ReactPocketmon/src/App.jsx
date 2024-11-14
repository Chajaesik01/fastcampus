import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage'; // 오타 수정
import MainPage from './pages/MainPage'; // 대문자 수정
import LoginPage from './pages/LoginPage'; 
const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [value, setValue] = useState(''); // value 상태 추가
  let countVariable = 0;
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  const increaseRef = () => {
    countRef.current += 1;
  }

  const increaseState = () => {
    setCount(prev => prev + 1);
  }

  const increaseVariable = () => {
    countVariable += 1;
  }

  // JSX 반환 부분
  return (
    <>
      {/* <p>Ref: {countRef.current}</p> 
      <p>State: {count}</p> 
      <p>Variable: {countVariable}</p> 
      <p>I rendered: {renderCountRef.current} times</p>

      <input onChange={(e) => setValue(e.target.value)} value={value} /> 

      <button onClick={increaseRef}>Ref +</button>
      <button onClick={increaseState}>State +</button>
      <button onClick={increaseVariable}>Variable +</button> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage/>}/>
          <Route path="/pokemon/:id" element={<DetailPage />} /> {/* 오타 수정 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
