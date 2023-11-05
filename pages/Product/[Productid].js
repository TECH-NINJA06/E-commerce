import React from 'react'
import {useRouter} from 'next/router'
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import 'tailwindcss/tailwind.css';
import all_product from '@/public/Assets/all_product';

const pagesId = (props) => {
    const {query} =  useRouter();
  return (
    <>
    <Header/>
   <h1>{query.Productid}</h1>
    <Footer/>
    </>
  )
}

export default pagesId