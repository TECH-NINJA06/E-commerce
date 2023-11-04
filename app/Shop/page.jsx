import Hero from '@/Components/Hero/Hero'
import Newcollection from '@/Components/NewCollection/Newcollection'
import Offers from '@/Components/Offers/Offers'
import Popular from '@/Components/Popular/Popular'
import React from 'react'

const shop = () => {
  return (
    <>
      <Hero/>
      <Popular/>  
      <Offers/> 
      <Newcollection/>
    </>
  )
}

export default shop