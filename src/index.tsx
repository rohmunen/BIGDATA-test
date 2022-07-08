import React from 'react';
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './pages/home';
import { NotFound } from './components/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route
        path="*"
        element={ <NotFound /> }
      />
    </Routes>
  </BrowserRouter>
)