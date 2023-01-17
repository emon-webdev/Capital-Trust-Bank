import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import React from 'react';
import education from "../../assets/Services(Home)/edu_loan.jpg";
import gold from "../../assets/Services(Home)/gold-loan.jpg";
import marriage from '../../assets/Services(Home)/marriage_loan.jpg';
import vehicle from "../../assets/Services(Home)/vehicle-loan.jpg";

const Services = () => {

  const ServicesData=[
    {
        id:1,
        details:"Our Education Loan covers the entire cost of your child education to help you send your children for higher education abroad.",
        title:"Education Loan",
        img:education
    },
    {
        id:2,
        details:" A secured loan, where gold jewellery is provided as collateral, is a gold loan. The loan amount that will be provided will depend on the value of the gold.",
        title:"Gold Loan",
        img:gold
    },
    {
        id:3,
        details:"Term loan facility available to incur own, children and sibling's marriage expenses only. Age Limit: Minimum Age 21 years and maximum 60 years.",
        title:"Marriage Loan",
        img:marriage
    },
    {
        id:4,
        details:"Own your dream car with Capital Trust Bank car loans. Capital Trust Bank offers uniquely tailored Car Loan product that takes the pain and hassle out of buying a car.",
        title:"Vehicle Loan",
        img:vehicle
    }
]
    return (
      <div className="services-area py-12">
           <h5 className="text-center text-red-500">-- Best Services --</h5>
          <h1 className="text-center text-3xl font-bold mb-10">
            We provide best services <br /> for your loans
          </h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       
          {/* <div className="">
            <div className="education card bg-base-100 shadow-xl">
              <figure>
                <img src={education} alt="education" className="h-40 w-full" />
              </figure>
              <div className="card-body text-center p-3">
                <h2 className="card-title font-bold text-xl">Education Loan</h2>
                <p className='my-3 p-2'>
                  Our Education Loan covers the entire cost of your child's
                  education to help you send your children for higher education
                  abroad.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-red-500">
                    Read More +
                  </div>
                </div>
              </div>
            </div>

            <div className="vehicle card bg-base-100 shadow-xl">
              <figure>
                <img src={vehicle} alt="vehicle" className="h-40 w-full" />
              </figure>
              <div className="card-body text-center p-3">
                <h2 className="card-title font-bold text-xl">Vehicle Loan</h2>
                <p  className='my-3 p-2'>
                  Own your dream car with Capital Trust Bank car loans. Capital
                  Trust Bank offers uniquely tailored Car Loan product that
                  takes the pain and hassle out of buying a car.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-red-500">
                    Read More +
                  </div>
                </div>
              </div>
            </div>

            <div className="gold card bg-base-100 shadow-xl">
              <figure>
                <img src={gold} alt="gold" className="h-40 w-full" />
              </figure>
              <div className="card-body text-center p-3">
                <h2 className="card-title font-bold text-xl">Gold Loan</h2>
                <p  className='my-3 p-2'>
                  A secured loan, where gold jewellery is provided as
                  collateral, is a gold loan. The loan amount that will be
                  provided will depend on the value of the gold.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-red-500">
                    Read More +
                  </div>
                </div>
              </div>
            </div>

            <div className="marriage card bg-base-100 shadow-xl">
              <figure>
                <img src={marriage} alt="marriage" className="h-40 w-full" />
              </figure>
              <div className="card-body text-center p-3">
                <h2 className="card-title font-bold text-xl">Marriage loan</h2>
                <p  className='my-3 p-2'>
                  Term loan facility available to incur own, children and
                  sibling's marriage expenses only. Age Limit: Minimum Age 21
                  years and maximum 60 years .
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-red-500">
                    Read More +
                  </div>
                </div>
              </div>
            </div>
          </div> */}
           {
           ServicesData.map(service =>(
            <Card sx={{ maxWidth: 424, maxHeight:536 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                maxHeight="140px"
                width={"100%"}
                image={service.img}
                alt="green iguana"
                position="relative"
              />
       
              <CardContent>
                <Typography fontSize={'16px'} fontWeight="bold">{service.title}</Typography>
                <Typography marginTop={2} gutterBottom fontSize={"16px"}  component="div">
                  {service.details}
                </Typography>
                <Button color='error' ><Typography fontSize='14px'fontWeight={900}>READ MORE</Typography> <ArrowOutwardIcon /></Button>
              </CardContent>
            </CardActionArea>
          </Card>
           ))
    }
    
        </div>
       
      </div>
    );
};

export default Services;