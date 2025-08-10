import './App.css'
import React from 'react'
import { Home } from './compos/home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Current } from './compos/current'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:current_task' element={<Current/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
