
import './App.css'
import Navigationbar from './components/Navigationbar'
import Home from './components/Home'
import Member from './components/Member'
import Songs from './components/Songs'
import Profile from './components/Profile'
import Profile1 from './components/Profile1'
import Profile2 from './components/Profile2'
import Profile3 from './components/Profile3'
import Profile4 from './components/Profile4'
import Profile5 from './components/Profile5'
import Profile6 from './components/Profile6'
import Profile7 from './components/Profile7'
import Profile8 from './components/Profile8'
import Profile9 from './components/Profile9'
import Profile10 from './components/Profile10'
import Profile11 from './components/Profile11'
import Profile12 from './components/Profile12'

import { BrowserRouter, Routes, Route} from "react-router-dom"


import './style/LandingPage.css'
function App() {
  return (
    <BrowserRouter>
    <div>
      <div className="Navbar">
        <Navigationbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Songs" element={<Songs/>}/>
        <Route path="/Member" element={<Member/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Profile1" element={<Profile1/>}/>
        <Route path="/Profile2" element={<Profile2/>}/>
        <Route path="/Profile3" element={<Profile3/>}/>
        <Route path="/Profile4" element={<Profile4/>}/>
        <Route path="/Profile5" element={<Profile5/>}/>
        <Route path="/Profile6" element={<Profile6/>}/>
        <Route path="/Profile7" element={<Profile7/>}/>
        <Route path="/Profile8" element={<Profile8/>}/>
        <Route path="/Profile9" element={<Profile9/>}/>
        <Route path="/Profile10" element={<Profile10/>}/>
        <Route path="/Profile11" element={<Profile11/>}/>
        <Route path="/Profile12" element={<Profile12/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
    
);
}

export default App;
