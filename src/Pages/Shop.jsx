import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
// import Footer from '../components/Footer/Footer'
import NewCollections from '../NewCollections/NewCollections'

const Shop = () => {
  return (
    <div>
       <Hero/> 
       <Popular/>
       <NewCollections/>
       {/* <Footer/> */}
    </div>
  )
}

export default Shop
