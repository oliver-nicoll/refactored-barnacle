// import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header'
import Nav from "./components/nav/Nav"
import About from './pages/about/About'
import Experience from './components/experience/Experience'
// import NotFound from './pages/NotFound/NotFound'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
   <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
   </> 
  )
}

export default App