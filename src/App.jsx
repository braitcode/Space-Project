
import './App.css'
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import Sidebar from './components/SideNav';


function App() {

  return (
    <>
    
   
    <BrowserRouter>
    <Header/>
    <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
