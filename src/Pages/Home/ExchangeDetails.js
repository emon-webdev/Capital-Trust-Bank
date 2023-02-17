import { List, ListIcon, ListItem, NumberInput, Stack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { MdCheckCircle } from "react-icons/md";
import "../../App.css";
import banner from "../../assets/exchange.jpg";
import { AuthContext } from "../../context/AuthProvider";
const ExchangeDetails = () => {
  const [name, setName] = useState("Exchange Rate");
  const [usd, setUsd] = useState(0);
  const { user } = useContext(AuthContext);
  const [state, setState] = useState({});
  useEffect(() => {
    fetch(
      "https://openexchangerates.org/api/latest.json?app_id=919d30d6d8364f23a10f5ba7e0a6894d"
    )
      .then((res) => res.json())
      .then((data) => {
        setState({ BDT: data.rates.BDT });
      });
  }, []);
  let sellingPrice = usd * state.BDT + parseInt(usd);
  let buyingPrice = usd * state.BDT - usd;
  const handleExchange = (event) => {
    event.preventDefault();
    const usd = event.target.usd.value;
    const info = {
      usd,
      sellingPrice,
      buyingPrice,
      email: user.email,
    };
    //store info into the database
    fetch(`https://capital-trust-bank-server.vercel.app/storeExchangeInfo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Request Success");
        event.target.reset();
        setUsd(0);
      });
  };
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
                <h2 className="text-lg font-semibold capitalize text-[#010c3a] py-4 text-center">
                  1 USA = {state.BDT}-BDT
                </h2>
              </div>

              <form onSubmit={handleExchange}>
                <div className="">
                  <Stack spacing={6}>
                    <NumberInput
                      defaultValue={0}
                      min={0}
                      className="text-black"
                    >
                      <input
                        name="usd"
                        type="number"
                        placeholder="Input Your Amount"
                        onChange={(e) => setUsd(e.target.value)}
                        className="border w-full p-3 rounded focus-visible:outline-none"
                      />
                    </NumberInput>

                    <p>Total buying price(BDT): {buyingPrice}</p>
                    <p>Total selling price(BDT): {sellingPrice}</p>
                  </Stack>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="sm-btn send-btn primary-btn exchange-btn bg-[#df0303]"
                  >
                    Send Now
                  </button>
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
