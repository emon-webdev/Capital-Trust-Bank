import React, { useEffect, useState } from 'react';

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch('https://capital-trust-bank-server.vercel.app/allCustomers')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);
  return <div className='my-2'>
    <h2 className='text-center default-font'>Total Customers:{customers.length}</h2>
    <div className='grid gap-2 md:grid-cols-3'>
      {
        customers.map(customer => {
          return (
            <div>
              <div key={customer._id}>
                <div className=" mx-auto my-2 gap-2 p-2 rounded h-fit default-bg">
                  <div className="flex items-center justify-center w-1/5">
                    <img
                      className="h-16 text-center w-16 rounded"
                      src={customer.image}
                      alt={customer.name}
                    />
                  </div>
                  <div className="info overflow-auto w-4/5">
                    <span>Name: {customer.name}</span>
                    <span>Email:{customer.email}</span>
                    <span>Phone:{customer.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>

  </div>;
};

export default AllCustomers; 
