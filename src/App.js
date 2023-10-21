import React, {Component} from 'react'
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
   from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Explore from './pages/explore';
import Login from './pages/login';
import Header from './components/Header';



function App() {
  return (
   <Router>
      <Header/>
      <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/login' element={<Login />} />
              </Routes>
        <Footer/>
</  Router>
  );
}

export default App;