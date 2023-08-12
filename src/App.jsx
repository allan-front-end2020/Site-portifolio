import { BrowserRouter, Routes, Route } from 'react-router-dom'



import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portifolio from './pages/portifolio/Portifolio'
import Contact from './pages/contact/Contact'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar /> 
     <Routes>
       <Route path='Site-portifolio' index element={<Home/>}/>
       <Route path='Site-portifolio' element={< About/>}/>
       <Route path='Site-portifolio' element={< Portifolio/>}/>
       <Route path='Site-portifolio' element={<Contact/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
