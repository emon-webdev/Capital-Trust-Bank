import { ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCheckCircle } from "react-icons/ai";
import fundImg from "../../assets/fundsImg/fundMainImg.png";
import videoBg from "../../assets/fundsImg/videoBg.png";
import videoBtn from "../../assets/fundsImg/videoBtn.png";
import VideoModal from "../../component/Modal/VideoModal";
const Funds = ({}) => {
  const { t } = useTranslation();
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.400" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <div className="funds-area pt-[60px] md:pt-[120px] pb-[60px]">
      <div className="container">
        <div className="fund-wrap md:flex items-center justify-between ">
          <div className="fund-video-content  relative  md:mr-7">
            <img src={fundImg} alt="" />
            <div className="video-content absolute bottom-0 right-0">
              <div className="video-img relative">
                <img className="" src={videoBg} alt="" />
                <p onClick={onOpen}>
                  <img src={videoBtn} alt="" srcset="" />
                </p>
              </div>
            </div>
          </div>
          <div className="fund-content basis-3/6 mt-10">
            <h3 className="text-[#DF0303] text-md mb-4">
              {t("Funds_Donate_title")}
            </h3>
            <h2 className="text-[#010C3A] text-4xl font-bold mb-6">
              {t("Funds_Donate_SubTitle")}
            </h2>
            <p className="">{t("Funds_Donate_describe")}</p>
            <div className="donate-talk pt-4">
              <p className="flex font-semibold text-[#010C3A] mb-2 ">
                <span className="">
                  <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
                </span>
                <span>{t("Funds_Donate_first_li")}</span>
              </p>
              <p className="flex font-semibold text-[#010C3A] mb-2 ">
                <span className="">
                  <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
                </span>
                <span>{t("Funds_Donate_first_2ndli")}</span>
              </p>
              <p className="flex font-semibold text-[#010C3A] mb-2 ">
                <span className="">
                  <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
                </span>
                <span>{t("Funds_Donate_first_3rd_Li")}</span>
              </p>
              <p className="flex font-semibold text-[#010C3A] mb-2 ">
                <span className="">
                  <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
                </span>
                <span>{t("Funds_Donate_first_4th_Li")}</span>
              </p>
            </div>
            <VideoModal
              onClose={onClose}
              isOpen={isOpen}
              overlay={overlay}
              OverlayOne={OverlayOne}
              onOpen={onOpen}
            />
            <button class="primary-btn mt-5" fdprocessedid="9ncuxb">
              {t("Donate_btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
