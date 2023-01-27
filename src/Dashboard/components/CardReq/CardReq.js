import React, { useEffect, useState } from 'react';

const CardReq = () => {
      const [customers, setCustomers] = useState([]);
      useEffect(() => {
        fetch(`http://localhost:5000/cardReq`)
          .then((res) => res.json())
          .then((data) => {
            setCustomers(data);
          });
      }, []);
      console.log('card req ', customers)
    return (
      <div className='my-2'>
        <h2 className="text-center default-font">
          Total Card Request:{customers.length}
        </h2>
        {customers.map((customer) => {
          return (
            <div key={customer._id}>
              <div className="w-4/5 lg:w-1/2 mx-auto my-2 gap-2 p-2 rounded h-fit default-bg">
                <div className="info flex flex-col overflow-auto">
                  <span>Name: {customer.applierName}</span>
                  <span>Account id:{customer.accountId}</span>
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

export default CardReq;