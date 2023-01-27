import React, { useEffect, useState } from 'react';

const LoanReq = () => {
     const [customers, setCustomers] = useState([]);
     useEffect(() => {
       fetch(`http://localhost:5000/applicants`)
         .then((res) => res.json())
         .then((data) => {
           setCustomers(data);
         });
     }, []);
    return (
      <div className='my-2'>
        <h2 className="text-center default-font">
          Total Loan Request:{customers.length}
        </h2>
        {customers.map((customer) => {
          return (
            <div key={customer._id}>
              <div className="w-4/5 lg:w-1/2 mx-auto flex justify-evenly my-2 gap-2 p-2 rounded h-fit default-bg">
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded"
                    src={customer.image}
                    alt={customer.name}
                  />
                </div>
                <div className="info flex flex-col overflow-auto">
                  <span>Name: {customer.name}</span>
                  <span>Email:{customer.email}</span>
                  <span>Phone:{customer.phone}</span>
                  {/* <span>Account id:{customer.AccountId}</span> */}
                  <span>City:{customer.city}</span>
                  <span>Date:{customer.date}</span>
                  <span>Loan Type:{customer.loan}</span>
                  <div className="flex gap-2 p-2">
                    <button className="ring rounded p-2 hover:bg-red-600">
                      Accept
                    </button>
                    <button className="ring rounded p-2 hover:bg-red-600">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default LoanReq;