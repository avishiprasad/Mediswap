import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import UploadMedicine from "./pages/UploadMedicine";
import SearchMedicine from "./pages/SearchMedicine";
import Footer from "./components/Footer";
import "./App.css";
import {useState} from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'signup': return <Signup />;
      case 'upload': return <UploadMedicine />;
      case 'search': return <SearchMedicine />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;