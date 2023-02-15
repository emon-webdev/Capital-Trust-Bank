import React, { useEffect, useState } from 'react';
import '../../../App.css';

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allCustomers')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);
  return <div className='my-2'>
    <h2 className='text-center font-[22px] heading pb-3'>Total Customers:{customers.length}</h2>
    <div className='grid gap-4 md:grid-cols-3'>
      {
        customers.map(customer => {
          return (
            <>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform bg-white rounded-xl group ">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={customer.image} alt={customer.name} />

                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">{customer.name}</h1>

                  <p className="mt-2 text-gray-500 capitalize">{customer.email}</p>                  
                  <p className="mt-2 text-gray-500 capitalize">{customer.phone}</p>                  
              </div>
            </>
            // <div>
            //   <div key={customer._id}>
            //     <div className=" mx-auto my-2 gap-2 p-2 rounded h-fit default-bg">
            //       <div className="flex items-center justify-center w-1/5">
            //         <img
            //           className="h-16 text-center w-16 rounded"
            //           src={customer.image}
            //           alt={customer.name}
            //         />
            //       </div>
            //       <div className=" text-white p-5 mt-3 customer-info overflow-auto w-4/5">
            //         <p className=''>Name: {customer.name}</p>
            //         <p className=''>Email:{customer.email}</p>
            //         <p className=''>Phone:{customer.phone}</p>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        })
      }
    </div>

  </div>;
};

export default AllCustomers; 