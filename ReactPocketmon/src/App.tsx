import React, { useState, useRef, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import DetailPage from './pages/DetailPage'; // 오타 수정
import MainPage from './pages/mainPage'; // 대문자 수정
import LoginPage from './pages/LoginPage'; 
import { NavBar } from './components/NavBar';

/// <reference path="./main.d.ts/>
import {v4} from 'uuid';
const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [value, setValue] = useState(''); // value 상태 추가

  const Layout = () => {
    return(
      <>
        <NavBar />
        <br />
        <br />
        <br />
        <Outlet/>
      </>
    )
  }
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
          <Route path ="/" element = {<Layout/>}>
            <Route index element={<MainPage />} />
            <Route path="login" element={<LoginPage/>}/>
            <Route path="/pokemon/:id" element={<DetailPage />} /> {/* 오타 수정 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
