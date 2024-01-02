import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import axios from "axios";
import { useEffect, useState } from 'react'

function App() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios.get('https://2cf8-113-199-225-179.ngrok-free.app/api/about-us', {
      headers: {
        'ngrok-skip-browser-warning': 'skip-browser-warning'
      }
    })
    .then(response => setAbout(response.data))
    .catch(error => console.log("this is error", error));
  }, []);
  return (
    <>
     <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about-us" element={<About about={about} /> } />
        <Route path="/contact-us" element={<Contact /> } />
     </Routes>
    </>
  )
}

export default App
