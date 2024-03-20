import React from 'react'
import Header from '../commom/Header'
import MainHeader from '../layout/MainHeader'
import HotelService from '../commom/HotelService'
import Parallax from '../commom/Parallax'
import RoomCarousel from '../commom/RoomCarousel'

const Home = () => {
  return (
    <section>
        <MainHeader/>
        <div className='container'>
          <RoomCarousel/>
          <Parallax/>
          <RoomCarousel/>
          <HotelService/>
          <Parallax/>
          <RoomCarousel/>
        </div>
        
    </section>
  )
}

export default Home