import { useDisclosure } from "@chakra-ui/hooks";
import { ModalOverlay } from "@chakra-ui/modal";
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import creditCardImg from "../../assets/apply-loan/credit-card-img.png";
import CreditCardModal from "../../component/Modal/CreditCardModal";

const ApplyCreditCard = () => {
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.400" />;
  const [idError, setIdError] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <div className="credit-card-area py-16">
      <div className="container">
        <div className="credit-card-wrap flex column-reverse md:flex-row justify-between items-center">
          <div className="credit-card-img mb-[32px] md:mb-0 md:mr-12">
            <img src={creditCardImg} className="w-full" alt="" srcSet="" />
          </div>
          <div className="credit-card-content dot-shape basis-3/6">
            <h2 className=" text-3xl md:text-4xl font-semibold">
              Apply for Credit Card
            </h2>
            <p className="py-3">
              While you’ll always need some cash, using a credit card for your
              spending needs can significantly simplify overseas travel.
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>Avoid Dynamic Currency Conversion</span>
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>Call Your Credit Card Issuer Before Leaving</span>
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>Use a Credit Card with No Foreign Transaction Fee</span>
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>
                If a credit card is stolen, it can be suspended and replaced in
                short order.
              </span>
            </p>
            {/* {idError ? (
              <p className="text-red-600 text-sm mb-0">
                Account Id did't match Please Try Again.
              </p>
            ) : (
              ""
            )} */}
            <div>
              <button
                className="primary-btn mt-5"
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <CreditCardModal
        onClose={onClose}
        // setOverlay={setOverlay}
        isOpen={isOpen}
        overlay={overlay}
        // onOpen={onOpen}
        OverlayOne={OverlayOne}
        setIdError={setIdError}
        idError={idError}
      />
    </div>
  );
};

export default ApplyCreditCard;
