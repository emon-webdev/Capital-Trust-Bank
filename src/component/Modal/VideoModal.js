import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import React, { useState } from "react";
const VideoModal = ({ onClose, isOpen }) => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Video</ModalHeader>
          <ModalCloseButton />
          <div>
            <div className="modal__video-align">
              {videoLoading ? (
                <div className="modal__spinner">
                  {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                  Loading
                </div>
              ) : null}
              <iframe
                className="modal__video-style"
                onLoad={spinner}
                loading="lazy"
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/4UZrsTqkcW4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default VideoModal;