import React, { useEffect, useState } from 'react';

const LoanReq = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch(`https://capital-trust-bank-server-ten.vercel.app/applicants`)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);
  return (
    <div className='my-2'>
      <h2 className="text-center heading">
        Total Loan Request:{customers.length}
      </h2>
      <div className='loan grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {customers.map((customer) => {
          return (
            <>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform bg-white rounded-xl group ">
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">{customer.name}</h1>
                <p className="mt-2 text-gray-500 capitalize"><strong>Email:</strong> {customer.email}</p>
                <p className="mt-2 text-gray-500 capitalize"><strong>Phone:</strong> {customer.phone}</p>
                <p className="mt-2 text-gray-500 capitalize"><strong>City:</strong> {customer.city}</p>
                <p className="mt-2 text-gray-500 capitalize"><strong>Date:</strong> {customer.date}</p>
                <p className="mt-2 text-gray-500 capitalize"><strong>Loan Type:</strong> {customer.loan}</p>
                <p className="mt-2 text-gray-500 capitalize"><strong>Package:</strong> {customer.package}</p>
                <div className="flex gap-3 mt-3 p-3">
                <button className="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a]">
                  Accept
                </button>
                <button className="text-md sm-btn primary-btn exchange-btn bg-[#df0303]">
                  Cancel
                </button>
              </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LoanReq;