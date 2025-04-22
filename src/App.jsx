import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import { Home,Auth,Orders } from './Pages'
import './App.css'
import Header from './Components/shared/Header'
import BottomNav from './Components/shared/BottomNav'
import Tables from './Pages/Tables'
import Menu from './Pages/Menu'

function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/auth' element={<Auth/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/tables' element={<Tables/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
        </Routes>
        
      </Router>

    </>
  )
}

export default App
