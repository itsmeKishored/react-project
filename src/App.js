import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./Service"
//import Footer from "./Footer"
 export default function App() {
     return(
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path ="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="Service" element={<Service/>}/> 
  </Route>
       </Routes>
       </BrowserRouter>
     )
 }
