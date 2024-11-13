import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage'; // 오타 수정
import MainPage from './pages/mainPage';
const App = () => {
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
