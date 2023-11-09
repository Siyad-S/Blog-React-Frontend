import React from 'react'
import Layout from '../Layout/Layout'
import Admin from '../AdminPanel/Admin'
import { Routes, Route } from 'react-router-dom';
import "../ReactRouter/MainRouter.css"

const MainRouter = () => {
  return (
    <div className='main_router'>
        <Routes>
            <Route path="/" element={< Layout />} />
            <Route path="admin" element={< Admin />} />
        </Routes>
    </div>
  );
};

export default MainRouter