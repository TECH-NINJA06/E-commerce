import React from 'react'
import data_product from '@/public/Assets/data'
import Items from '../Items/Items'
const Popular = () => {
  return (
    <div id="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div id="popularItems">
            {data_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
    
  )
}

export default Popular