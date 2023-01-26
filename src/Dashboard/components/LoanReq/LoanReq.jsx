import React, { useEffect, useState } from 'react';

const LoanReq = () => {
     const [customers, setCustomers] = useState([]);
     useEffect(() => {
       fetch(`http://localhost:5000/applicants`)
         .then((res) => res.json())
         .then((data) => {
          console.log(data)
           setCustomers(data);
         });
     }, []);
    return (
      <div>
        {customers.map((customer) => {
          return (
            <div key={customer._id}>
              <div className="w-1/2 mx-auto flex my-2 gap-2 p-2 border rounded">
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
                  <span>Account id:{customer.AccountId}</span>
                  <span>City:{customer.city}</span>
                  <span>Date:{customer.date}</span>
                  <span>Loan Type:{customer.loan}</span>
                  <div className="flex gap-2 p-2">
                    <button className="ring rounded p-1">Give Loan</button>
                    <button className="ring rounded p-1">Cancel</button>
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