

import { Box,Button,styled } from '@mui/material'
import React from 'react'
import {ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { useState } from 'react';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/patym';



const LeftContainer = styled(Box)(({theme})=>({

    minWidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }

}))


const Image = styled('img')({
   padding:'15px',
   
})

const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    height:'50px',
    borderRadius:'2px',
    color:'white',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('lg')]:{
        width:'48%'
    }
}))
 


export default function ActionItem({product}) {


    const [quantity, setQuantity]= useState(1)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;

    const addItemToCart=()=>{
        dispatch(addToCart(id, quantity))
          navigate('/cart')
    }

    const buyNow=async()=>{
       let response = await payUsingPaytm({amount:500 , email:'niranjanverma823@gmail.com'})
       let information={
        action:'https://securegw-stage-paytm.in/order/process',
        params:response
       }
       post(information)
    }


  return (
    <LeftContainer>
        <Box style={{ padding:'15px 20px',
    border:'1px solid #f0f0f0', width:'90%'}}>
        <Image src={product.detailUrl} alt="" />
        </Box>
        <StyledButton style={{marginRight:10,background:'#ff9f00' }} onClick={()=>addItemToCart()}><Cart/>Add to Cart</StyledButton>
        <StyledButton style={{background:'#fb541b'}} onClick={()=>buyNow()}><Flash/>Buy Now</StyledButton>
    </LeftContainer>
  )
}
