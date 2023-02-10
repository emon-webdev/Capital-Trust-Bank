import { ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import fundImg from "../../assets/fundsImg/fundMainImg.png";
import videoBg from "../../assets/fundsImg/videoBg.png";
import videoBtn from "../../assets/fundsImg/videoBtn.png";
import DonateOptionModal from "../../component/Modal/DonateOptionModal";
import VideoModal from "../../component/Modal/VideoModal";
const Funds = ({}) => {
  const OverlayVideoOne = () => <ModalOverlay bg="blackAlpha.400" />;
  const OverlayPayOne = () => <ModalOverlay bg="blackAlpha.400" />;
  const {
    isOpen: isVideoOpen,
    onOpen: onVideoOpen,
    onClose: onVideoClose,
  } = useDisclosure();
  const {
    isOpen: isPayOpen,
    onOpen: onPayOpen,
    onClose: onPayClose,
  } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayVideoOne />);
  return (
    <div className="funds-area pt-[60px] md:pt-[120px] pb-[60px]">
      <div className="container">
        <div className="fund-wrap md:flex items-center justify-between ">
          <div className="fund-video-content  relative  md:mr-7">
            <img src={fundImg} alt="" />
            <div className="video-content absolute bottom-0 right-0">
              <div className="video-img relative">
                <img className="" src={videoBg} alt="" />
                <p onClick={onVideoOpen}>
                  <img src={videoBtn} alt="" srcset="" />
                </p>
              </div>
            </div>
            {/* Video Modal */}
            <VideoModal
              onClose={onVideoClose}
              isOpen={isVideoOpen}
              overlay={overlay}
              OverlayOne={OverlayVideoOne}
            />
          </div>
          <div className="fund-content basis-3/6 mt-10">
            <h3 className="text-[#DF0303] text-md mb-4">
              -- Need Funds & Donate --
            </h3>
            <h2 className="text-[#010C3A] text-4xl font-bold mb-6">
              Start Monthly Donation to Save Lives
            </h2>
            <p className="">
              With your support, countless children will receive health care and
              a happy life. Start your monthly donation today.
            </p>
            <div className="donate-talk pt-4">
              <p className="flex font-semibold text-[#010C3A] mb-2 ">
                <span className="">
                  <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
                </span>
                <span>The sole meaning of life is to serve humanity.</span>
              </p>
              <p className="flex font-semibold text-[#010C3A] mb-2 ">
                <span className="">
                  <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
                </span>
                <span>
                  We cannot despair of humanity, since we ourselves are human
                  beings.
                </span>
              </p>
              <p className="flex font-semibold text-[#010C3A] mb-2 ">
                <span className="">
                  <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
                </span>
                <span>
                  If we have no peace, it is because we have forgotten that we
                  belong to each other.
                </span>
              </p>
              <p className="flex font-semibold text-[#010C3A] mb-2 ">
                <span className="">
                  <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
                </span>
                <span>
                  To deny people their human rights is to challenge their very
                  humanity.
                </span>
              </p>
            </div>

            <button onClick={onPayOpen} className="primary-btn mt-5">
              Donate Now
            </button>
            {/* Donate Modal */}
            <DonateOptionModal
              onClose={onPayClose}
              isOpen={isPayOpen}
              overlay={overlay}
              OverlayOne={OverlayPayOne}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
