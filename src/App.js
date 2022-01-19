import React from 'react'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar'
import Rowpost from './Components/Rowpost/Rowpost'
import {orginals,actions} from './urls'


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix Orginals'/>
      <Rowpost url={actions} title='Action' isSmall/>
    </div>
  )
}

export default App

