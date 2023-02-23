import { useDisclosure } from "@chakra-ui/hooks";
import { ModalOverlay } from "@chakra-ui/modal";
import { default as React, useContext } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import creditCardImg from "../../assets/apply-loan/credit-card-img.png";
import CreditCardModal from "../../component/Modal/CreditCardModal";
import { AuthContext } from "../../context/AuthProvider";

const ApplyCreditCard = () => {
  const { t } = useTranslation();
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
              -- {t("Apply_for_Credit_Card")} --
            </h3>
            <h2 className="text-[#010C3A] bg-white text-3xl md:text-4xl font-bold mb-3">
              {t("Apply_for_Credit_Card_sb_tlt")}
            </h2>
            <p className="py-3 bg-white">{t("Apply_for_Credit_Card_pg")}</p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>{t("Apply_for_Credit_Card_L1")}</span>
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>{t("Apply_for_Credit_Card_L2")}</span>
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>{t("Apply_for_Credit_Card_L3")}</span>
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>{t("Apply_for_Credit_Card_L4")}</span>
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
                  <Link to="/accountOpenFrom" className="primary-btn mt-5">
                    Open An Account
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
