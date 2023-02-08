import React, { useState } from 'react';
import logo from '../.././assets/PaymentBills/logo.png'
import DynamicBanner from '../Shared/DynamicBanner/DynamicBanner';
import starfour from '../.././assets/PaymentBills/StarFour.png'
import icon1 from '../.././assets/PaymentBills/Icon 1.png'
import icon2 from '../.././assets/PaymentBills/Icon 2.png'
import icon3 from '../.././assets/PaymentBills/Icon 3.png'



const PaymentBills = () => {
    const [name, setName] = useState("Payment Bills");
    return (
        <div>
            <DynamicBanner name={name}></DynamicBanner>
            <div className='paymentbills-area'>
            <div className='container'>
            <div className='text-center'>
                <h1 className='font-bold text-5xl mt-5'>Payment Bills</h1>
                <p className=' font-semibold text-2xl'>
                Pay your electricity, water, gas, internet, TV, credit card bill <br />
                and get a digital receipt instantly!
                </p>
            </div>
            <div className='flex justify-around'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='mt-9'>
                <div className='flex'>
                    <img src={starfour} alt="" />
                    <h1>Why Choose Us</h1>
                </div>
                <h1 className='font-bold text-5xl mt-2'>Few resons why you <br />
                    should choose us?</h1>
                    <p className='mt-2'>
                    There are many variations of passages of Lorem Ipsum amet avoilble but majority have suffered alteration <br /> in some form, by injected humur or randomise words which don't sure amet sit dolor quras alto lorem.
                    </p>
                    <div className='flex gap-2 mt-5'>
                       <img src={icon1} alt="" />
                        <div>
                        <h1 className='font-bold text-2xl'>Low Costing</h1>
                        <p>Vestibulum ac diam sit amet quam vehicula elemen tum <br /> sed sit amet dui praesent sapien pelle tesque.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-5'>
                       <img src={icon2} alt="" />
                        <div>
                        <h1 className='font-bold text-2xl'>Safe & Secure</h1>
                        <p>Vestibulum ac diam sit amet quam vehicula elemen tum <br /> sed sit amet dui praesent sapien pelle tesque.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-5'>
                       <img src={icon3} alt="" />
                        <div>
                        <h1 className='font-bold text-2xl'>Live Support</h1>
                        <p>Vestibulum ac diam sit amet quam vehicula elemen tum <br /> sed sit amet dui praesent sapien pelle tesque.</p>
                        </div>
                    </div>
                    
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default PaymentBills;