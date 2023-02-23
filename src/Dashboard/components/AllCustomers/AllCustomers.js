import React, { useEffect, useState } from "react";
import "../../../App.css";

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("https://capital-trust-bank-server-ten.vercel.app/allCustomers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  return (
    <div className="my-2">
      <div className="dashboard-title">
        <h2 className="text-[#010C3A] text-3xl md:text-4xl font-bold mb-6">
          Total Bank Users:{customers.length}
        </h2>
        {/* <div className="">
          <input type="text" />
          <button>Search</button>
        </div> */}
      </div>
      <div className="grid gap-4 md:grid-cols-2 bg-[#F3F3FE]">
        {customers.map((customer) => {
          return (
            <>
              <div className="flex flex-col p-8 transition-colors duration-300 transform bg-white rounded-xl group ">
                <img
                  className="object-cover w-24 h-24 rounded-md ring-4 ring-gray-300"
                  src={customer.img}
                  alt={customer.firstName + " " + customer.lastName}
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
                  {customer.firstName} {customer.lastName}
                </h1>
                <h1 className="mt-4 text-xl font-semibold text-gray-700 capitalize">
                  Account Id:{customer?.accountId}
                </h1>

                <p className="mt-2 text-gray-500 ">{customer?.email}</p>
                <p className="mt-2 text-gray-500 capitalize">
                  Phone: {customer?.phone}
                </p>
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
        })}
      </div>
    </div>
  );
};

export default AllCustomers;
