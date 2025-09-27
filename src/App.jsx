
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import HomePage from './components/HomePage';
import Footer from './Footer';
import AboutPage from './components/AboutPage';
import OurWorkPage from './components/OurWorkPage';
import ContactPage from './components/ContactPage';
import BharatEternalPage from './components/BharatEternalPage';
import BharatLandPage from './components/BharatLandPage';
import ScrollLink from './components/ScrollLink';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollLink />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<OurWorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/page1" element={<BharatEternalPage />} />
        <Route path="/page2" element={<BharatLandPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
