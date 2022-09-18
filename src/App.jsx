import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Header from "./components/header/Header"
import Home from './pages/Home/Home'
// import About from './pages/about/About'
import NotFound from './pages/NotFound/NotFound'
import Navbar from './components/nav/Nav'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App