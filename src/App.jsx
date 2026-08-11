import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import Navabr from "./Components/HomeComponets/Navbar"

export default function App(){
  return(
   <>
     <Router>
      <Navabr/>
      <Routes>  
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
     </Router>
   </>
  )
}