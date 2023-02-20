import { useDisclosure } from "@chakra-ui/hooks";
import { ModalOverlay } from "@chakra-ui/modal";
import React, { useContext } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import creditCardImg from "../../assets/apply-loan/credit-card-img.png";
import CreditCardModal from "../../component/Modal/CreditCardModal";
import { AuthContext } from "../../context/AuthProvider";

const ApplyCreditCard = () => {
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.400" />;
  const { user } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <div className="credit-card-area py-16">
      <div className="container">
        <div className="credit-card-wrap flex column-reverse md:flex-row justify-between items-center">
          <div className="credit-card-img animate__animated animate__backInLeft basis-2/5 mb-[32px] md:mb-0 md:mr-12">
            <img src={creditCardImg} className="w-full" alt="" srcSet="" />
          </div>
          <div className="credit-card-content animate__animated animate__backInRight basis-3/5 bg-white dot-shape">
            <h3 className="text-[#DF0303] bg-white text-xl text-md mb-3">
              -- Apply for Credit Card --
            </h3>
            <h2 className="text-[#010C3A] bg-white text-3xl md:text-4xl font-bold mb-3">
              We provide Credit card for user experience.
            </h2>
            <p className="py-3 bg-white">
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
              {user?.email ? (
                <button
                  className="primary-btn mt-5"
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    onOpen();
                  }}
                >
                  Apply Now
                </button>
              ) : (
                <>
                  <Link to="/login" className="primary-btn mt-5">
                    Please Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <CreditCardModal
        onClose={onClose}
        isOpen={isOpen}
        overlay={overlay}
        OverlayOne={OverlayOne}
      />
    </div>
  );
};

export default ApplyCreditCard;
