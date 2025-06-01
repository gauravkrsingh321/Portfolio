import React from 'react'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Header/>
      <MainSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App