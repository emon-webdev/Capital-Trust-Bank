import React, { useEffect, useState } from 'react';

const AllCustomers = () => {
    const [customers,setCustomers] = useState([]);
     useEffect(() => {
       fetch(`http://localhost:5000/allCustomers`)
         .then((res) => res.json())
         .then((data) => {
           setCustomers(data);
           console.log(data);
         });
     }, []);
    return <div>
      {
        customers.map(customer => {
          return (
            <div key={customer._id}>
              <div className="w-1/2 mx-auto flex my-2 gap-2 p-2 border rounded">
                <div className="">
                  <img src={customer.image} alt={customer.name} />
                </div>
                <div className="info flex flex-col">
                  <span>Name: {customer.name}</span>
                  <span>Email:{customer.email}</span>
                  <span>Phone:{customer.phone}</span>
                </div>
              </div>
            </div>
          );
        })
      }
        
    </div>;
};

export default AllCustomers; 
