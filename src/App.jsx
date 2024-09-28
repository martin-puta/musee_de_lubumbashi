import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Footer from './Components/Footer'
import Collections from "./Components/Collections";
import Evenements from "./Components/Evenements";
import Nouveaute from "./Components/Nouveaute";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Collections />} />
        <Route path="/Skils" element={<Evenements />} />
        <Route path="/Contacts" element={<Nouveaute />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
