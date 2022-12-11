import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MasterData from './pages/MasterData';
import Navbar from './component/navbar/Navbar';
import DetailBook from './pages/DetailBook';
import AuthorData from './pages/AuthorData';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/masterdata' element={<MasterData />} />
        <Route path='/authordata' element={<AuthorData />} />
        <Route path='/detailbook/:id' element={<DetailBook />} />
        <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
