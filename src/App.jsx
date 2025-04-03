import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import Heading from './Components/Heading';
import Register from './Components/Register';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';
import SecondPage from './Components/SecondPage';
import Exams from './Components/Exams';
import QuizCategory from './Components/QuizCategory';
import Contactus from './Components/Contactus';

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  function HomePage() {
    return (
      <div>
        <Navbar onScrollToContact={scrollToContact} />
        <Heading />
        <Home />
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <SecondPage />
      <Exams />
      <QuizCategory />
      <Contactus ref={contactRef} />
    </div>
  );
}

export default App;
