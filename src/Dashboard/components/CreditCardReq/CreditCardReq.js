import React, { useEffect, useState } from 'react';
import '../../../App.css';

const CreditCardReq = () => {
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
        <h2 className="text-center heading">
          Total Card Request:{customers.length}
        </h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>
      {customers.map((customer) => {
          return (
            <div key={customer._id}>
              <div className=" mx-auto my-2 gap-4 py-5 px-5 rounded-xl h-fit bg-white">
                <div className="info flex flex-col overflow-auto">
                  <span className='py-2 text-xl'>Name: {customer.applierName}</span>
                  <span className='text-lg'>id:  {customer.accountId}</span>
                  <div className="flex gap-3 mt-3 p-3">
                    <button className="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a]">
                      Accept
                    </button>
                    <button className="text-md sm-btn primary-btn exchange-btn bg-[#df0303]">
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

export default CreditCardReq;