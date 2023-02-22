import { List, ListIcon, ListItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import { toast } from "react-hot-toast";
import { MdCheckCircle } from "react-icons/md";
import "../../App.css";
import banner from "../../assets/exchange.jpg";
const ExchangeDetails = () => {
  // const [name, setName] = useState("Exchange Rate");
  // const [usd, setUsd] = useState(0);
  // const { user } = useContext(AuthContext);
  // const [state, setState] = useState({});
  // useEffect(() => {
  //   fetch(
  //     "https://openexchangerates.org/api/latest.json?app_id=919d30d6d8364f23a10f5ba7e0a6894d"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setState({ BDT: data.rates.BDT });
  //     });
  // }, []);
  // let sellingPrice = usd * state.BDT + parseInt(usd);
  // let buyingPrice = usd * state.BDT - usd;
  // const handleExchange = (event) => {
  //   event.preventDefault();
  //   const usd = event.target.usd.value;
  //   const info = {
  //     usd,
  //     sellingPrice,
  //     buyingPrice,
  //     email: user.email,
  //   };
  //   //store info into the database
  //   fetch(`https://capital-trust-bank-server-ten.vercel.app/storeExchangeInfo`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(info),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       toast.success("Request Success");
  //       event.target.reset();
  //       setUsd(0);
  //     });
  // };

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BDT');
  const [exchangeRate, setExchangeRate] = useState(0);
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/0957ac42195a9ede56d0194a/pair/${fromCurrency}/${toCurrency}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.conversion_rate)
        setExchangeRate(data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [fromCurrency, toCurrency]);
  let convert = exchangeRate.conversion_rate * amount;
  let totalBuying = convert.toFixed(2);
  // let totalSelling = convert.toFixed(2) 

  const handleExchangeSubmit = (event) => {
    event.preventDefault()
    const exchangeInfo = { amount, totalBuying, fromCurrency }
    fetch('https://capital-trust-bank-server-ten.vercel.app/exchange', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(exchangeInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Money transferred successfully. If you have any queries please contact us.')
        }
      })
      .catch(error => {
        console.log(error)
        toast.error(error.message)
      })
  }
  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  }



  return (
    <div>
      <div
        className="exchange-bg py-10 my-[50px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
        }}
      >
        <div className="container text-white w-full exchange-wrapper flex items-center justify-between">
          <div className="w-[60%] left-side">
            <div className="section-title md:mr-5">
              <h5 className="text-[#DF0303] text-xl text-md mb-3">
                -- Exchange --
              </h5>
              <h1 className="text-white md:leading-[48px] text-4xl md:text-[40px] font-bold mb-6">
                International Currency Transfer Provider
              </h1>
            </div>
            <div className="mt-4 md:mr-5">
              <List spacing={6} className="text-white">
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color="green.500"
                    className="text-white"
                  />
                  Great exchange rates
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  No hidden fees
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  24/7 Transfers
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  5-star customer rating
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Award-winning service
                </ListItem>
              </List>
            </div>
          </div>

          <div className="w-[40%] right-side">
            <section className="p-6 mx-auto bg-white rounded-md shadow-md">
              <div className="">
                <h3 className="text-center">{exchangeRate?.time_last_update_utc?.slice(0, 16)}</h3>
                <h2 className="text-lg font-semibold capitalize text-[#010c3a] py-4 text-center">
                  1 {fromCurrency} = {exchangeRate.conversion_rate?.toFixed(2)}-BDT
                </h2>
              </div>
              {/* */}
              <form onSubmit={handleExchangeSubmit}>
                <div className="text-center">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <input
                        name="amount"
                        type="number"
                        placeholder="Input Your Amount"
                        className="border w-full p-3 rounded focus-visible:outline-none text-black"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <div className='select-parent text-black'>
                      <select id="from-currency"
                        style={{ borderLeft: 'none' }}
                        className='select focus:outline-none border p-1'
                        value={fromCurrency}
                        onChange={handleFromCurrencyChange}
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">AUD</option>
                        <option value="CAD">CAD</option>
                        <option value="INR">INR</option>
                      </select>
                    </div>

                  </div>
                  <div>
                    <h1>{amount} {fromCurrency} = {convert?.toFixed(2)}-BDT</h1>
                    <h1>Total Buying Price = {Math.ceil(totalBuying)}-BDT</h1>
                    {/* <h1>Total Selling = {totalSelling}-BDT</h1> */}
                  </div>
                  <h1 className="text-left my-4"><strong>Note:</strong> Delivery Time 1 Working Days</h1>
                  <div className="">
                   {
                    amount > 0 ?  <button                     
                    type="submit"
                    className="sm-btn send-btn primary-btn exchange-btn bg-[#df0303]"
                  >
                    Send Now
                  </button> : undefined
                   }
                  </div>
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
