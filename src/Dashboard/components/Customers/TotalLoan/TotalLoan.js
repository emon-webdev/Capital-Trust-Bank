import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const TotalLoan = () => {
 const {user} = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://capital-trust-bank-server-ten.vercel.app/totalLoan/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }, []);

    return (
        <div>
            TotalLoan
        </div>
    );
};

export default TotalLoan;