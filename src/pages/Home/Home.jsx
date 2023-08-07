import React, { useEffect, useState } from 'react'
import Navigation from '../../component/Navigation'

export const Home = () => {

  const [shop,setShop] = useState([{}])
  useEffect(()=>{
    axios.get('http://api_oh.udvc.ac.th/shop').then(res=>{
      setShop(res.data.data);
    })
  },[shop]);

  const warpItem = shop.map((item)=>)



  return (
    <>
    <Navigation/>

    </>
  )
}

export default Home