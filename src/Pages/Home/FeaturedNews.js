import {  Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import img1 from '../../assets/features/features-1.png'
import img2 from '../../assets/features/features-2.png'
import img3 from '../../assets/features/features-3.png'
import { CardActionArea } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, color, padding } from '@mui/system'
export default function FeaturedNews() {
    const NewsData=[
        {
            id:1,
            category:"Business",
            title:"Stock Exchange Market Foreca 2021-2022",
            img:img1
        },
        {
            id:2,
            category:"Business",
            title:"How companies are re-configuring supply",
            img:img2
        },
        {
            id:3,
            category:"Business",
            title:"Stock Exchange Market Foreca 2021-2022",
            img:img3
        },
    ]
  return (
    <div className='features-area'>
        <div className="container grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
    {
           NewsData.map(news =>(
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={news.img}
                alt="green iguana"
              />
            <Box sx={{
              width:74,
              height:74,
              backgroundColor:"red",
              display:'flex',
              alignItems:'center',
              justifyContent:"center",
               color:"white",
               padding:'10px'
            }}>30 March</Box>
              <CardContent>
                <Typography fontSize={'16px'}>{news.category}</Typography>
                <Typography marginTop={2} gutterBottom fontSize={"20px"} fontWeight="bold" component="div">
                  {news.title}
                </Typography>
                <Button color='error' ><Typography fontSize='14px'fontWeight={700}>READ MORE</Typography> <ArrowOutwardIcon /></Button>
              </CardContent>
            </CardActionArea>
          </Card>
           ))
    }
        </div>
    </div>
  )
}
