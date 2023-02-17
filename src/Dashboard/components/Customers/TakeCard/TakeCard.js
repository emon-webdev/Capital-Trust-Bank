import html2canvas from 'html2canvas';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import VisaTransaction from '../MyTransaction/VisaTransaction';

const TakeCard = () => {
    const {user} = useContext(AuthContext);
    const [info,setInfo] = useState({})
    console.log(user.email)
    useEffect(() => {
        fetch(`http://localhost:5000/takeCard/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setInfo(data)
          });
      }, []);
      const handleDownload=(event)=> {
        event.preventDefault();
        const card = document.getElementById('credit-card');
        html2canvas(card).then((canvas) => {
          const link = document.createElement('a');
          link.download = `${info?.accountId}-card.png`;
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      }
    return (
        <div className='text-center'>
          {
            info.accountId ? <>  <VisaTransaction info={info}></VisaTransaction>
            <button className="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a]" type='submit' onClick={handleDownload}>
                Download
              </button> </> : <span>You didnot apply for card or wait for approval</span>
          }
           
        </div>
    );
};

export default TakeCard;