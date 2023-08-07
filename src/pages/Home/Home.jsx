import React, { useEffect, useState } from 'react';
import Navigation from '../../component/Navigation';
import { Wrap, WrapItem } from '@chakra-ui/react';
import axios from 'axios';
import { ShopCard } from '../../component/ShopCard';


export const Home = () => {
  
  const [shop,setShop] = useState([{}])
  useEffect(()=>{
    axios.get('http://api_oh.udvc.ac.th/shop').then(res=>{
      setShop(res.data.data);
    })
  },[shop]);

  const warpItem = shop.map((item)=>
  <WrapItem>
    <ShopCard/>
  </WrapItem>
  )


  return (
    <>
    <Navigation/>
    <Wrap>{warpItem}</Wrap>

    </>
  )
}

export default Home