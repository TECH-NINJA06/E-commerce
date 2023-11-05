"use client"
import React from 'react'
import ShopCategory from '../ShopCategory/ShopCategory'

const men = () => {
  const category="men"
  return (
    <div>
      
      <img src="/Assets/banner_mens.png" alt="" className='block'/>
      <ShopCategory  category={category}/>
    </div>
  )
}

export default men