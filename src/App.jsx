import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Skills from './Component/Skills'
import Education from './Component/Education'
import Projects from './Component/Projects'
import Achievements from './Component/Achievements'
import Hire from './Component/Hire'
import Error404 from './Component/Error404'
import Footer from './Component/Footer'




function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/education' element={<Education/>}/> 
        <Route path='/projects' element={<Projects/>}/> 
        <Route path='/achievements' element={<Achievements/>}/>
        <Route path='/hire' element={<Hire/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;

