import React, { useState } from 'react'
import Login from './Login';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Cart from './Cart';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />    
        <Route path='/cart' element={<Cart/>} />

      </Routes>


    </>
  )
}

export default App
