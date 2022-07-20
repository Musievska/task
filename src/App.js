import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Details from './components/Details';
import './App.css';


function App() {
  return (
    < Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;