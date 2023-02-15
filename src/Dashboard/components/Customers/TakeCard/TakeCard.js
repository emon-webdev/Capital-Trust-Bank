import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import VisaTransaction from '../MyTransaction/visaTransaction';

const TakeCard = () => {
    const {user} = useContext(AuthContext);
    const [info,setInfo] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/takeCard/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setInfo(data)
          });
      }, []);
    return (
        <div>
            <VisaTransaction info={info}></VisaTransaction>
            TakeCard
        </div>
    );
};

export default TakeCard;