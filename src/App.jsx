

import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'


// BMHAFMtGQ1QOrBg9

function App() {

  
  return (
    <>
    <NavBar />
    <div className='w-[90%] mx-auto mb-10'>
    <Outlet />
    </div>
    <div className='bg-[#BC0A4D]'>

    <Footer />
    </div>
    </>
  )
}

export default App
