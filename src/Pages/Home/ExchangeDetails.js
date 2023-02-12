import React, { useState } from 'react';
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import banner from '../../assets/exchange.jpg';
import { List, ListIcon, ListItem, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import '../../App.css'

const ExchangeDetails = () => {
    const [name, setName] = useState("Exchange Rate");
    const [buyAmount, setBuyAmount] = useState(0);
    const [sellAmount, setSellAmount] = useState(0);

    let totalBuyAmount = buyAmount / 100 * 2 + 106.50;

    return (
        <div>
            <DynamicBanner name={name} />
            <div
                className='exchange-bg py-10 my-[50px]'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>

                <div className='container text-white w-full exchange-wrapper flex items-center justify-between'>
                    <div className='w-[60%] left-side'>
                        <h1 className='text-[75px] text-white leading-[90px] font-semibold'>International  Currency Transfer Provider</h1>
                        <div className='mt-4'>
                            <List spacing={6} className='text-white'>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' className='text-white' />
                                    Great exchange rates
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    No hidden fees
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    24/7 Transfers
                                </ListItem>
                                {/* You can also use custom icons from react-icons */}
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    5-star customer rating
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    Award-winning service
                                </ListItem>
                            </List>
                        </div>
                    </div>

                    <div className='w-[40%] right-side'>
                        <section className="p-6 mx-auto bg-white rounded-md shadow-md">
                            <div className=''>
                                <h2 className="text-lg font-semibold capitalize text-[#010c3a] py-4 text-center">1 USA = 106.50-BDT</h2>
                            </div>

                            <form>
                                <div className="">
                                    <Stack spacing={6}>
                                    <h1 className='text-[18px]'>Buy</h1>
                                        <NumberInput
                                            min={0}
                                            className='text-black'

                                        >
                                            
                                            <NumberInputField
                                                placeholder='input your amount'
                                                onChange={(e) => setBuyAmount(e.target.value)} />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>

                                        <h1 className='text-[18px]'>Sell</h1>
                                        <NumberInput min={0} className='text-black'>
                                            
                                            <NumberInputField
                                                placeholder='input your amount'
                                                onChange={(e) => setSellAmount(e.target.value)}
                                            />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                        
                                       <div>
                                        <h1>Total Coast = {totalBuyAmount}-BDT</h1>
                                       </div>
                                    </Stack>
                                </div>

                                <div className="">
                                    <button className='sm-btn send-btn primary-btn exchange-btn bg-[#df0303]'>Send Now</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExchangeDetails;