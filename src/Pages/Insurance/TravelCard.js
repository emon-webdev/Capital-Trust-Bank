import React from 'react'
import {BiSupport} from 'react-icons/bi'
import {GiGloves} from 'react-icons/gi'
import {GiFocusedLightning} from 'react-icons/gi'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { Card, CardContent, Typography } from '@mui/material'

export default function TravelCard() {
    const traveldata=[
        {
            id:0,
            title:'Service With Love',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            icon:GiGloves
        },
        {
            id:1,
            title:'Clients Focused',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            icon:GiFocusedLightning
        },
        {
            id:2,
            title:'Awesome Support',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            icon:BiSupport
        },
    ]
  return (
    <div className=' container flex align-center justify-center gap-6 my-20 flex-col md:flex-row'>
        {
            traveldata.map(tra=>(
    <Card key={tra.id} style={{width:'100%' ,height:'auto'}}  className="hover:bg-[#041C51]  hover:text-[#fff]
    hover:animate-animated hover:animate-pulse">
        
        <CardContent className='flex flex-col align-center justify-center hover:text-white'>
        <div className="w-100  text-4xl flex align-center justify-center my-3">
        <tra.icon  />
        </div>
        <Typography fontWeight={700} color='#DF0303' marginY={2} fontSize={24} textAlign='center'>
         {TravelCard.title}
        </Typography>
        <div className='text-md text-center'>
          {tra.details}
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