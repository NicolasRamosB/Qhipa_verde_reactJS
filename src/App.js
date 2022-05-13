import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from "./componentes/Navbar/Navbar"
import { Footer } from "./componentes/Footer/Footer"
import {Socialbar} from "./componentes/Socialbar/Socialbar"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NotFound from "./componentes/NotFound/NotFound"
import React from 'react'
import Index from './componentes/Index/Index'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter basenama="process.env.PUBLIC_URL">
        <Navbar/>
        <Routes >
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
        <Socialbar/>
      </BrowserRouter>
    </>
  );
}

export default App;
