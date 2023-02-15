import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
const VideoModal = ({ onClose, isOpen, onOpen }) => {
  const [videoLoading, setVideoLoading] = useState(true);
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
  const [size, setSize] = React.useState("xl");

  return (
    <div data-testid="videomodal">
      <Modal
        size={size}
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Video</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="modal__video-align">
              {videoLoading ? (
                <div className="modal__spinner">
                  <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                  Loading
                </div>
              ) : null}
              <iframe
                className="modal__video-style"
                onLoad={spinner}
                loading="lazy"
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/D2mLhKuWQT4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default VideoModal;
