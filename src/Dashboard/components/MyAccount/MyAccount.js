
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const MyAccount = () => {
    const data = [{name: 'January', uv: 400, pv: 1400, amt: 2400},{name: 'February', uv: 300, pv: 2400, amt: 2400},{name: 'March', uv: 500, pv: 2400, amt: 2400},{name: 'April', uv: 800, pv: 400, amt: 2400},{name: 'May', uv: 300, pv: 2400, amt: 2400}, ];
    return (
        <div className='container  flex flex-col md:flex-row lg:flex-row sm:align-items-center sm:justify-content-center '>
            <div className="text-white">
            <Box sx={{backgroundColor:'#3085d2'}} borderRadius={5}  marginX={3} marginY={5} height='150px' width='400px' padding={3} border={0}>
                <Typography color='white'padding={1}  variant='h4'>Available Balance <span>$5000</span> </Typography></Box>
            <Box sx={{backgroundColor:'#da6666'}} borderRadius={5} marginY={5} marginX={3}   height='150px' width='400px'padding={3} border={0}>
                <Typography color='white'padding={1}  variant='h4'>Withdraw Amount <span>$2000</span></Typography>
            </Box>
            </div>
            <div className=" mt-12  align-items-center justify-content-center">
            <h3 className='text-center'>Expense Graph</h3>

  <LineChart  className='ml-10' width={600} height={300} data={data}  margin={{ top:5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#D184d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>


            </div>
        </div>
    );
};

export default MyAccount;