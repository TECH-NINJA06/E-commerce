"use client"
import React from 'react'
import ShopCategory from '../ShopCategory/ShopCategory'

const kids = () => {
  const category="kid"
  return (
    <div>
    <img src="/Assets/banner_kids.png" alt="" />
    <ShopCategory  category={category}/>
  </div>
  )
}

export default kids