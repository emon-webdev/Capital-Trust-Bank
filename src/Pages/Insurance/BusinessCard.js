import React from 'react'
import {BiSupport} from 'react-icons/bi'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import {MdOutlineFreeCancellation} from 'react-icons/md'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { Card, CardContent, Typography } from '@mui/material'


export default function BusinessCard() {
    const businessdata=[
        {
            id:0,
            title:'Awesome Support',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            icon:BiSupport
        },
        {
            id:1,
            title:'Trustworthy Company',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            icon:VscWorkspaceTrusted
        },
        {
            id:2,
            title:'Anytime Cancellation',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            icon:MdOutlineFreeCancellation
        },
    ]
  return (
    <div className=' container flex align-center justify-center gap-6 my-20 flex-col md:flex-row'>
        {
            businessdata.map(busi=>(
    <Card style={{width:'100%' ,height:'auto'}}  className="hover:bg-[#041C51]  hover:text-[#fff] ">
        
        <CardContent className='flex flex-col align-center justify-center hover:text-white'>
        <div className="w-100  text-4xl flex align-center justify-center my-3">
        <busi.icon  />
        </div>
        <Typography fontWeight={700} color='#DF0303' marginY={2} fontSize={24} textAlign='center'>
         {busi.title}
        </Typography>
        <div className='text-md text-center'>
          {busi.details}
        </div>
        <div className="w-100 text-sky-500 text-4xl flex align-center justify-center my-3">
        <BsFillArrowRightCircleFill/>
        </div>
      </CardContent>
      
    </Card>
            ))
        }
    </div>
  )
}
