import { useDisclosure } from "@chakra-ui/hooks";
import { ModalOverlay } from "@chakra-ui/modal";
import React, { useContext, useState } from "react";
import icon1 from "../.././assets/PaymentBills/icon-1.png";
import icon2 from "../.././assets/PaymentBills/icon-2.png";
import icon3 from "../.././assets/PaymentBills/icon-3.png";
import logo from "../.././assets/PaymentBills/logo.png";
import { AuthContext } from "../../context/AuthProvider";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import PaymentBillsModal from "./PaymentBillsModal";
import PaymentBillsSlider from "./PaymentBillsSlider";

const PaymentBills = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("Payment Bills");
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.400" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <div>
      <DynamicBanner name={name}></DynamicBanner>
      <PaymentBillsSlider></PaymentBillsSlider>
      <div className="pay-bills-area py-24">
        <div className="container">
          <div className="pay-wrap md:flex items-center justify-between">
            <div className="md:mr-7">
              <img src={logo} alt="" />
            </div>
            <div className="pay-content basis-3/6 mt-10 md:mt-0">
              <h3 className="text-[#DF0303] md:text-xl text-md mb-2">
                -- Pay Bills --
              </h3>
              <h2 className="text-[#010C3A] text-4xl font-bold mb-4">
                Payment Bills
              </h2>
              <p className="mb-4">
                Pay your electricity, water, gas, internet, TV, credit card bill
                and get a digital receipt instantly!
              </p>
              <div className="flex mb-3  items-center">
                <img className="mr-3" src={icon1} alt="" />
                <div>
                  <h1 className="font-semibold text-lg mb-1">
                    No Extra Charge
                  </h1>
                  <p>
                    No matter where you are in the country, you can safely
                    calculate your any bill at home.
                  </p>
                </div>
              </div>
              <div className="flex mb-3 items-center">
                <img className="mr-4" src={icon2} alt="" />
                <div>
                  <h1 className="font-semibold text-lg mb-1">Safe & Secure</h1>
                  <p>
                    There is no hassle of standing in line and you will get the
                    receipt of the bill directly on your mobile if you pay the
                    any bill from Our Bank.
                  </p>
                </div>
              </div>
              <div className="flex mb-3 items-center">
                <img className="mr-4" src={icon3} alt="" />
                <div>
                  <h1 className="font-semibold text-lg mb-1">Live Support</h1>
                  <p>
                    Pay your electricity, water, gas, internet, telephone, TV,
                    credit card bill or any government fee and get a digital
                    receipt instantly!
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
                  Pay Bills
                </button>
              </div>
            </div>
          </div>
        </div>
        <PaymentBillsModal
          onClose={onClose}
          isOpen={isOpen}
          overlay={overlay}
          OverlayOne={OverlayOne}
        />
      </div>
    </div>
  );
};

export default PaymentBills;
