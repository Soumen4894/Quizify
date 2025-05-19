import React from 'react'
import SQL from './components/SQL'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import JAVA from './components/JAVA'
import ReactJS from './components/ReactJS'
import JavaScript from './components/JavaScript'
import Node from './components/Node'
import Home from './components/Home'
import HTML from './components/HTML'
// import ans from './assets/react.svg'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sql' element={<SQL />} />
          <Route path='/java' element={<JAVA />} />
          <Route path='/react' element={<ReactJS />} />
          <Route path='/js' element={<JavaScript />} />
          <Route path='/node' element={<Node />} />
          <Route path='/html' element={<HTML/>}/>
        </Routes>
      </BrowserRouter>

      {/* <h1>Hello World</h1> */}
      

    </>
  )
}

export default App