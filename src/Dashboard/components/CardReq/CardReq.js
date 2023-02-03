import React, { useEffect, useState } from 'react';

const CardReq = () => {
      const [customers, setCustomers] = useState([]);
      useEffect(() => {
        fetch(`https://capital-trust-bank-server.vercel.app/cardReq`)
          .then((res) => res.json())
          .then((data) => {
            setCustomers(data);
          });
      }, []);
      console.log('card req ', customers)
    return (
      <div className='my-2'>
        <h2 className="text-center text-white default-font">
          Total Card Request:{customers.length}
        </h2>
      <div className='grid gap-5 md:grid-cols-3'>
      {customers.map((customer) => {
          return (
            <div key={customer._id}>
              <div className=" mx-auto my-2 gap-4 py-5 px-5 rounded-xl h-fit default-bg">
                <div className="text-white  info flex flex-col overflow-auto">
                  <span className='py-2 text-xl'>Name: {customer.applierName}</span>
                  <span className='text-lg'>Account id:  {customer.accountId}</span>
                  <div className="flex gap-3 mt-3 p-3">
                    <button className="ring text-lg fw-bold rounded  bg-blue-700 p-2 hover:bg-red-600">
                      Accept
                    </button>
                    <button className="ring  text-md bg-blue-700 rounded p-2 hover:bg-red-600">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    );
};

export default CardReq;