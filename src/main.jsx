import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shyonapedia from './components/gallary/Shyonapedia.jsx'
import About from './components/About/About.jsx'
import Mentor from './components/Mentor/Mentor.jsx'
import Courses from './components/Course/Courses.jsx'
import Contact from './components/Contact/Contact.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path = '/' element={<App />}/>
        <Route path ='/courses' element ={<Courses/>}/>
        <Route path ='/shyonapedia' element ={<Shyonapedia/>}/>
        <Route path ='/mentor' element ={<Mentor/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/contact' element={<Contact/>}/>
    </Routes>
      
    </BrowserRouter>  
  </StrictMode>,
)
