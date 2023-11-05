"use client"
import React from 'react'
import ShopCategory from '../ShopCategory/ShopCategory'

const women = () => {
  const category="women"
  return (
    <div>
    <img src="/Assets/banner_women.png" alt="" />
    <ShopCategory  category={category}/>
  </div>
  )
}

export default women