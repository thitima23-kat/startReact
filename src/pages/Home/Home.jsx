import React, { useEffect, useState } from 'react';
import Navigation from '../../component/Navigation';
import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import axios from 'axios';
import { ShopCard } from '../../component/ShopCard';


export const Home = () => {
  
  const [shop,setShop] = useState([{}])
  useEffect(()=>{
    axios.get('http://api_oh.udvc.ac.th/shop').then(res=>{
      setShop(res.data.data);
    })
  },[]);

  const warpItem = shop.map((item)=>
  <WrapItem key={item.id}>
    <Center  w='300' h='400' bg='red.200' borderRadius={10}>
    <ShopCard  id={item.id} name={item.name} photo={item.photo}/>
    </Center>
  </WrapItem>
  )


  return (
    <>
    <Navigation/>
    <Wrap spacing={'30'} justify={'center'} mt={'85px'}>
      {warpItem}</Wrap>

    </>
  )
}

export default Home