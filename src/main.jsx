import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './Profile.jsx'
import Mypage from './cre.jsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './welcome.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter basename="/FEF_PRO_prac">
     <Routes>
      <Route path="Profile" element={<Profile/>}></Route>
      <Route path="hidden/cre" element={<Mypage/>}></Route>
      <Route path="/" element={<Welcome/>}></Route>
     </Routes>
    </BrowserRouter>

)
