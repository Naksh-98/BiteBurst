import React from 'react';
import './App.css';
import Header from './Components/Header';
import DownloadMobile from './Components/DownloadMobile';
import Contact from './Components/Contact';
import About from './Components/About';
import FAQs from './Components/FAQs';
import Services from './Components/Services';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Home from './Components/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Home/>
      <About />
      <Contact />
      <DownloadMobile />
      <FAQs />
      <Services />
      <Features />
      <Footer />
    </>
  );
}
export default App;
// <>
//   <BrowserRouter>
// </BrowserRouter>

//   <Route exact path='/Home' element={<Home />} />
//   <Route path='/About' element={<About />} />
//   <Route path='/Contact' element={<Contact />} />
//   <Route path='/DownloadMobile' element={<DownloadMobile />} />
//   <Route path='/FAQs' element={<FAQs />} />
//   <Route path='/Services' element={<Services />} />
//   <Route path='/Features' element={<Features />} />