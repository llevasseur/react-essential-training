import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App, About, Contact } from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
