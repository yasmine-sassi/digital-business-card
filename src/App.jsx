import React from 'react'
import './App.css'
import About from'./components/About'
import Footer from'./components/Footer'
import Infos from'./components/Infos'
import Interests from'./components/Interests'

export default function App() {
  return(
    <div className='container'>
     <Infos />
     <div  className="content">
        <About/>
        <Interests/>
     </div>
     
     <Footer/> 
    </div>
  )
}
