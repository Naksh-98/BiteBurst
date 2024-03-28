import './App.css';
import Header from './Components/Header'
import DownloadMobile from './Components/DownloadMobile'
import Contact from './Components/Contact'
import About from './Components/About'
import FAQs from './Components/FAQs'
import Services from './Components/Services'
import Features from './Components/Features'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/DownloadMobile' element={<DownloadMobile />} />
          <Route path='/FAQs' element={<FAQs />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Features' element={<Features />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;

// {/* <About/>
// <Contact/>
// <DownloadMobile/>
// <FAQs/>
// <Services/>
// <Features/> */}