import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const TotalLoan = () => {
 const {user} = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/totalLoan/${user?.email}`)
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