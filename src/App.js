import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import UploadMedicine from "./pages/UploadMedicine";
import SearchMedicine from "./pages/SearchMedicine";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<UploadMedicine />} />
          <Route path="/search" element={<SearchMedicine />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
