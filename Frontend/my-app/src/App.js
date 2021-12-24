import './App.css';
import NavigationBar from './components/NavigationBar';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className='NavigationBar'>
          <NavigationBar />
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Projects' element={<Projects />}/>
          <Route path='/ContactMe' element={<ContactMe />} />
        </Routes>
      </Router>

      <div className='Body'>

      </div>
    </>
  )
}

export default App;
