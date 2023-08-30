
import Footer from './components/main/Footer';
import Navbar from './components/main/Navbar';
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Calendar from './pages/Calendar';
import Event from './pages/Event'
import MentorSHPE from './pages/MentorSHPE';
import Officers from './pages/Officers'
import SHPEtinas from './pages/SHPEtinas';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home className='overflow-hidden'/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/event' element={<Event/>}/>
          <Route path='/mentorshpe' element={<MentorSHPE/>}/>
          <Route path='/officers' element={<Officers/>}/>
          <Route path='/event' element={<Event/>}/>
          <Route path='/shpetinas' element={<SHPEtinas/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
