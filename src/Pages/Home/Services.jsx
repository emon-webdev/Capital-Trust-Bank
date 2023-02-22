import { Card, CardBody } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import { Stack, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useGetLoansQuery } from '../../features/api/apiSlice';
// import {  useGetLoansQuery } from '../../features/apiSlice';


const Services = () => {

  // const [loans, setLoans] = useState([]);
  // useEffect(() => {
  //   fetch('https://capital-trust-bank-server-ten.vercel.app/loans')
  //     .then(res => res.json())
  //     .then(data => setLoans(data))
  // }, [])
const {data:loans,isLoading}= useGetLoansQuery();
console.log(loans)


  return (

    <div className="services-area py-12">
      <div className="container">
        <div className="section-title w-full md:w-[650px] mx-auto text-center">
          <h5 className="text-[#DF0303] text-xl text-md mb-3">-- Best Services --</h5>
          <h1 className="text-[#010C3A] md:leading-[48px] text-4xl md:text-[40px] font-bold mb-6">
            We provide best services for your loans
          </h1>
        </div>
        <div
          className="pt-7 align-content-center overflow-hidden justify-items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
          loans?.map(loan => (
              <Card key={loan?._id}
                className='service-container overflow-hidden'
                sx={{ maxWidth: 724, maxHeight: 536, marginBottom: "30px", borderRadius: "6px" }}>
                <Image
                  component="img"
                  borderTopRightRadius="6px"
                  borderTopLeftRadius="6px"
                  maxHeight="100%"
                  width={"100%"}
                  src={loan?.img}
                  alt="green iguana"
                  position="relative"
                  className='service-image'
                />
                <CardBody>
                  <Stack className='flex flex-col justify-between'>
                    <Text fontSize={'16px'} fontWeight="bold">{loan.title}</Text>
                    <Text marginTop={2} gutterbottom fontSize={"16px"} component="div">
                      {loan?.details.slice(0, 100) + "..."}
                    </Text>
                    <Link to={`/loans/${loan?.title}`} className="sm-btn">
                      Apply
                    </Link>
                  </Stack>
                </CardBody>
              </Card>
            ))
          }

        </div>
      </div>
    </div>

  );
};

export default Services;