import { Card, CardBody } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import { Stack, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Services = () => {

  const [loans, setLoans] = useState([]);
  useEffect(() => {
    fetch('https://capital-trust-bank-server.vercel.app/loans')
      .then(res => res.json())
      .then(data => setLoans(data))
  }, [])

  return (

    <div className="services-area py-12">
      <div className="container">
        <div className="section-title text-center">
          <h5 className="text-[#DF0303] text-xl text-md mb-4">-- Best Services --</h5>
          <h1 className="text-[#010C3A] md:leading-[48px] text-4xl md:text-[40px] font-bold mb-6">
            We provide best services <br className='none md:block' /> for your loans
          </h1>
        </div>

        <div className="align-content-center justify-items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


          {
            loans.map(loan => (
              <Card sx={{ maxWidth: 724, maxHeight: 536 }}>
                <CardBody>
                  <Image
                    component="img"
                    maxHeight="100%"
                    width={"100%"}
                    src={loan.img}
                    alt="green iguana"
                    position="relative"
                  />

                  <Stack>
                    <Text fontSize={'16px'} fontWeight="bold">{loan.title}</Text>
                    <Text marginTop={2} gutterBottom fontSize={"16px"} component="div">
                      {loan.details}
                    </Text>
                    <Link to={`/loans/${loan.title}`}>
                      <button className='my-2 mx-auto flex items-center justify-center primary-btn' >Apply  </button></Link>
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