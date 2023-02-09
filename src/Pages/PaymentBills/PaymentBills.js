import React, { useState } from "react";
import logo from "../.././assets/PaymentBills/logo.png";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import starfour from "../.././assets/PaymentBills/StarFour.png";
import icon1 from "../.././assets/PaymentBills/icon-1.png";
import icon2 from "../.././assets/PaymentBills/icon-2.png";
import icon3 from "../.././assets/PaymentBills/icon-3.png";
import { ModalOverlay } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import PaymentBillsModal from "./PaymentBillsModal";

const PaymentBills = () => {
  const [name, setName] = useState("Payment Bills");
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.400" />;
  //   const [idError, setIdError] = useState([]);
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <div>
      <DynamicBanner name={name}></DynamicBanner>
      <div className="paymentbills-area">
        <div className="container">
          <div className="md:flex justify-around">
            <div className="mt-5">
              <img src={logo} alt="" />
            </div>
            <div className="mt-9">
              <div>
                <h2 className="text-[#DF0303] text-md mb-4">-- Pay Bill --</h2>
              </div>
              <h1 className="text-[#010C3A] text-4xl font-bold mb-6">
                Payment Bills
              </h1>
              <p className="">
                Pay your electricity, water, gas, internet, TV, credit card bill
                and get a digital receipt instantly!
              </p>
              <div className="flex gap-2 mt-5">
                <img src={icon1} alt="" />
                <div>
                  <h1 className="font-bold text-2xl">No Extra Charge</h1>
                  <p>
                    No matter where you are in the country, you can safely
                    calculate your any bill at home.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <img src={icon2} alt="" />
                <div>
                  <h1 className="font-bold text-2xl">Safe & Secure</h1>
                  <p>
                    There is no hassle of standing in line and you will get the
                    receipt of the bill directly on <br /> your mobile if you
                    pay the any bill from Our Bank.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <img src={icon3} alt="" />
                <div>
                  <h1 className="font-bold text-2xl">Live Support</h1>
                  <p>
                    Pay your electricity, water, gas, internet, telephone, TV,
                    credit card bill or any government
                    <br /> fee and get a digital receipt instantly!
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="primary-btn mt-5"
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    onOpen();
                  }}
                >
                  Payment Bills Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <PaymentBillsModal
          onClose={onClose}
          // setOverlay={setOverlay}
          isOpen={isOpen}
          overlay={overlay}
          // onOpen={onOpen}
          OverlayOne={OverlayOne}
        />
      </div>
    </div>
  );
};

export default PaymentBills;
