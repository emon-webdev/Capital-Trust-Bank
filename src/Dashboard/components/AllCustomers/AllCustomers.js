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

    </div>;
};

export default AllCustomers;
