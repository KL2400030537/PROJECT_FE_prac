import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './Profile.jsx'
import Mypage from './cre.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './welcome.jsx'

createRoot(document.getElementById('root')).render(

    <Router basename="/PROJECT_FE_prac">
     <Routes>
      <Route path="Profile" element={<Profile/>}></Route>
      <Route path="cre" element={<Mypage/>}></Route>
      <Route path="/" element={<Welcome/>}></Route>
     </Routes>
    </Router>

)
