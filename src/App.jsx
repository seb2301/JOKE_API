import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import JokeApi from './pages/JokeApi'
import Api from './pages/Api'


export default function App() {
  
  return (
    <> 
    <Header />
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/api' element={<Api />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/jokeapi' element={<JokeApi />}/>
          
        </Routes>
      <Footer />
      </> 
      
  )
}
