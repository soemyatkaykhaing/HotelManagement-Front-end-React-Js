import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import AddRoom from './components/rooms/AddRoom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExistingRooms from './components/rooms/ExistingRooms'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import EditRoom from './components/rooms/EditRoom'
import { Navbar } from 'react-bootstrap'
import RoomListing from './components/rooms/RoomListing'
import Admin from './components/admin/Admin'



function App() {
  
  return (
    <>
    <main>
      <Router>
        <Routes>
          <Navbar/>
          <Route path='/' element={<Home/>}/>
          <Route path='/edit-room/:roomId' element={<EditRoom/>}/>
          <Route path='/existing-rooms' element={<ExistingRooms/>}/>
          <Route path='/add-room' element={<AddRoom/>}/>
          <Route path='/browse-all-rooms' element={<RoomListing/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </main>
     
    </>
  )
}

export default App
