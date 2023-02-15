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
  console.log('customer', customers)
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
                {/* <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={customer.image} alt={customer.name} /> */}

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">{customer.name}</h1>

                <p className="mt-2 text-gray-500 capitalize"><strong>Email:</strong> {customer.email}</p>
                <p className="mt-2 text-gray-500 capitalize"><strong>Phone:</strong> {customer.phone}</p>
                <p className="mt-2 text-gray-500 capitalize"><strong>City:</strong> {customer.city}</p>
                <p className="mt-2 text-gray-500 capitalize"><strong>Date:</strong> {customer.date}</p>
                <p className="mt-2 text-gray-500 capitalize"><strong>Loan Type:</strong> {customer.loan}</p>
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
            // <div key={customer._id}>
            //   <div className=" mx-auto text-center default-bg text-white my-2 gap-2 p-2 rounded shadow-lg h-fit">
            //     <div className="">
            //       <img
            //         className="h-16 w-16 mx-auto rounded"
            //         src={customer.image}
            //         alt={customer.name}
            //       />
            //     </div>
            //     <div className="info flex flex-col overflow-auto">
            //       <span>Name: {customer.name}</span>
            //       <span>Email:{customer.email}</span>
            //       <span>Phone:{customer.phone}</span>
            //       {/* <span>Account id:{customer.AccountId}</span> */}
            //       <span>City:{customer.city}</span>
            //       <span>Date:{customer.date}</span>
            //       <span>Loan Type:{customer.loan}</span>
            //       <div className="flex justify-center gap-2 p-2">
            //         <button className="ring rounded p-2 hover:bg-red-600">
            //           Accept
            //         </button>
            //         <button className="ring rounded p-2 hover:bg-red-600">
            //           Cancel
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoanReq;