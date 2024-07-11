import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import Loginpage from "./pages/LoginPage"
import Registerpage from "./pages/RegisterPage"
import Menupage from "./pages/MenuPage"
import Profilepage from "./pages/ProfilePage"
import NotFound from "./pages/NotFound"




function App () {
  return(
    <Routes>
      <Route path= "/" element = {<HomePage/>} />
      <Route path= "/about" element = {<AboutPage/>} />
      <Route path= "/Login" element = {<Loginpage/>} />
      <Route path= "/MasterAdmin/Register" element = {<Registerpage/>} />


      <Route path= "/Menu" element = {<Menupage/>} />
      <Route path= "/Profile" element = {<Profilepage/>} />
      <Route path= "*" element={<NotFound />}/>
    </Routes>
  )
}

export default App