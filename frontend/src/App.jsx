import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import Loginpage from "./pages/LoginPage"
import Registerpage from "./pages/RegisterPage"
import Menupage from "./pages/MenuPage"
import Profilepage from "./pages/ProfilePage"



function App () {
  return(
    <Routes>
      <Route path= "/" element = {<HomePage/>} />
      <Route path= "/about" element = {<AboutPage/>} />
      <Route path= "/Login" element = {<Loginpage/>} />
      <Route path= "/Register" element = {<Registerpage/>} />


      <Route path= "/Menu" element = {<Menupage/>} />
      <Route path= "/Profile" element = {<Profilepage/>} />
    </Routes>
  )
}

export default App