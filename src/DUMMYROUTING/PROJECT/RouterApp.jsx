import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login1 from './Login';
import Project1 from './Project1';
import RouterApp from './RouterApp';

const RouterApp = () => (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/Project1" element={<Project1 />} />
    </Routes>
  </BrowserRouter>
  </>
);

export default RouterApp;
