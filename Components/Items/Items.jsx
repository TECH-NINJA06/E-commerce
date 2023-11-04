import React from 'react'


const Items = (props) => {
  
  return (
    <div id="item" className='w-screen flex flex-col'>
        <img src={props.image.src} alt="images" className='flex w-52'/>
        <p className='mx-1 flex'>{props.name}</p>
        <div id="itemPrices" className='flex gap-5 '>
            <div id="newPrices" className='text-slate-700 text-lg font-medium flex'>{props.new_price}</div>
            <div id="oldPrices" className='text-slate-400 text-lg font-normal line-through flex'>{props.old_price}</div>
        </div>
    </div>
  )
}

export default Items