import React, { createContext } from 'react'
import all_product from '@/public/Assets/all_product';
export const ShopContext = createContext(null);
const Shopcontextprovider = (props)=>{
    const contextValue={all_product}
  return (
    <>
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    </>
  )
}

export default Shopcontextprovider