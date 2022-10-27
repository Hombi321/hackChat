import './App.css';
import {ChatPage} from './ChatPage'
import React, { FC } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

export const  App:FC = () => {
  return ( <Router>
  <Routes>
    <Route path={"/"} element={<ChatPage />} />
  </Routes>
</Router>
  )
}
