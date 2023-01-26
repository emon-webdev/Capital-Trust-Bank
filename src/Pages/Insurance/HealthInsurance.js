import React from 'react'
import health from '../../assets/insurance/Hospital bed-pana.png'

export default function HealthInsurance() {
  return (
    <div className='insuranc-area' >
        <div className="container flex">
            <div className="">
            <img style={{width:'600px',height:'600px',  transform: 'translate(-50px)', setDuration:'3000'}} src={health} alt="" />
            </div>
            <div className="">

            </div>
        </div>

    </div>
  )
}
