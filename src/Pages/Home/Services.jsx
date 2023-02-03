import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import education from "../../assets/Services(Home)/edu_loan.jpg";

const Services = () => {
  // const loans = useSelector((state)=> state.servicesReducer.services)
  // console.log(services)
  const [loans, setLoans] = useState([]); 
  useEffect(() => {
    fetch('http://localhost:5000/loanService')
      .then(res => res.json())
      .then(data => setLoans(data))
  }, [])
  
  // const services = useLoaderData();
  // console.log(services);
  //   const ServicesData=[
  //     {
  //         "id":"1",
  //         "details":"Our Education Loan covers the entire cost of your child education to help you send your children for higher education abroad.",
  //         "title":"Education Loan",
  //         "img":"https://i.ibb.co/2WYbDt5/edu-loan.jpg",

  //     },
  //     {
  //         "id":"2",
  //         "details":" A secured loan, where gold jewellery is provided as collateral, is a gold loan. The loan amount that will be provided will depend on the value of the gold.",
  //         "title":"Gold Loan",
  //         "img":"https://i.ibb.co/4WB22H1/gold-loan.jpg",
  //     },
  //     {
  //         "id":"3",
  //         "details":"Term loan facility available to incur own, children and sibling's marriage expenses only. Age Limit: Minimum Age 21 years and maximum 60 years.",
  //         "title":"Marriage Loan",
  //         "img":"https://i.ibb.co/R23kLm0/marriage-loan.jpg",
  //     },
  //     {
  //         "id":"4",
  //         "details":"Own your dream car with Capital Trust Bank car loans. Capital Trust Bank offers uniquely tailored Car Loan product that takes the pain and hassle out of buying a car.",
  //         "title":"Vehicle Loan",
  //         "img":"https://i.ibb.co/vVxszGm/vehicle-loan.jpg",

  //     }
  // ]
  return (

    <div className="services-area py-12">
      <h5 className="text-center text-red-500">-- Best Services --</h5>
      <h1 className="text-center text-3xl font-bold mb-10">
        We provide best services <br /> for your loans
      </h1>
  
      <div className="container align-content-center justify-items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


        {
          loans.map(loan => (
            <Card sx={{ maxWidth: 724, maxHeight: 636 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  maxHeight="140px"
                  width={"100%"}
                  image={loan.img}
                  alt="green iguana"
                  position="relative"
                />

                <CardContent>
                  <Typography fontSize={'16px'} fontWeight="bold">{loan.title}</Typography>
                  <Typography marginTop={2} gutterBottom fontSize={"16px"} component="div">
                    {loan.details}
                  </Typography>
                  <Link to={`/loanService/${loan._id}`}>
                    <button className='my-2 mx-auto flex items-center justify-center primary-btn' >Apply  </button></Link>
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