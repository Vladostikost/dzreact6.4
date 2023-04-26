import './App.css';
import Hexashop from './components/Hexashop'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import MenPage from './components/MenPage'
import WomenPage from './components/WomenPage'
import KidPage from './components/KidPage'
import './components/Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FaqPage from './components/FaqPage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Hexashop/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/Men' element={<MenPage/>}/>
      <Route path='/Women' element={<WomenPage/>}/>
      <Route path='/Kid' element={<KidPage/>}/>
      <Route path='/Contact' element={<ContactPage/>}/>
      <Route path='/Faq' element={<FaqPage/>}/>




      </Routes>


      
      </BrowserRouter>
    </div>
  );
}

export default App;
