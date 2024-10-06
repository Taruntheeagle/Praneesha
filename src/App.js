import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Try_carousel from './components/Try_carousel';
import Card_items from './components/Card_items';
import Blog from './components/Blog';
import About from './components/About';
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import RAG from './Blogs/RAG'
import Services from './components/Services';
import NEW from './Blogs/new_blog';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [mode, setmode] = useState('light');
  const location = useLocation();

  useEffect(() => {
    setProgress(30);
    const timeoutId = setTimeout(() => {
      setProgress(100); 
    }, 300);

    return () => clearTimeout(timeoutId); 
  }, [location]);

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#3A3A3A'; 
      document.body.classList.add('dark-mode');
      document.body.style.color = '#FFFFFF'; 
      document.title = "Praneesha - Dark Mode";
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'; 
      document.body.classList.remove('dark-mode');
      document.body.style.color = '#000000'; 
      document.title = "Praneesha";
    }
  };
  
  
  return (
    <>
      <LoadingBar
        height={4.3}
        color= 'lightblue'
        progress={progress}
        onLoaderFinished={() => setProgress(0)} 
      />
      <Navbar mode={mode} togglemode={togglemode} />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Try_carousel />
              <Card_items />
              <Footer />
            </>
          }
        />
        <Route
          path='/about'
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path='/blog'
          element={
            <>
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path='/rag'
          element={
            <>
              <RAG />
              <Footer/>
            </>
          }
        />
        <Route
          path='/services'
          element={
            <>
              <Services/>
              <Footer/>
            </>
          }
        />
        <Route
          path='/new_blog'
          element={
            <>
              <NEW/>
              <Footer/>
            </>
          }
        />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router> 
      <App />
    </Router>
  );
}

export default AppWrapper;
