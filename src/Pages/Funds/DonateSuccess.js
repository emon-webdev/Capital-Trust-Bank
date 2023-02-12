import {
    Button,
    Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const DonateSuccess = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation();
  console.log(location.search);

  const query = new URLSearchParams(location.search);
  const transactionID = query.get("transactionId");
  console.log(transactionID);
  const [donate, setDonate] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/donate/by-transaction-id/${transactionID}`)
      .then((res) => res.json())
      .then((data) => setDonate(data));
  }, [transactionID]);
  console.log(donate);




  return (
    <div>
      <div className="container">
        <h2>COngrats! Successfully Donate</h2>
        <h2>Your Donate Summery</h2>
        <Button onClick={onOpen}>Trigger modal</Button>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h2>DOnate success</h2>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    </div>
  );
};

export default DonateSuccess;
