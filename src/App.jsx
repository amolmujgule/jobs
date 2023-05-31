import React from 'react'
import Footer from './Commpnants/FooterDiv/Footer'
import Job from './Commpnants/JobDiv/Job'
import Navbar from './Commpnants/NavBar/Navbar'
import Search from './Commpnants/SearchDiv/Search'
import Value from './Commpnants/ValueDiv/Value'

const App = () => {
  return<>
  <div className='w-[85%] m-auto '>
  <Navbar/>
  <Search/>
  <Job/>
  <Value/>
  <Footer/>

  </div>
  </>
}

export default App