import React from 'react'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Header/>
      <MainSection/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App