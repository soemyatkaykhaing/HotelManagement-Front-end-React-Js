import React from 'react'
import Header from '../commom/Header'
import MainHeader from '../layout/MainHeader'
import HotelService from '../commom/HotelService'
import Parallax from '../commom/Parallax'

const Home = () => {
  return (
    <section>
        <MainHeader/>
        <section className='container'>
          <Parallax/>
          <HotelService/>
          <Parallax/>
        </section>
        
    </section>
  )
}

export default Home