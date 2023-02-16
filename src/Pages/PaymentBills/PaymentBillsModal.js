import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const PaymentBillsModal = ({
  isOpen,
  onOpen,
  onClose,
  setOverlay,
  overlay,
  setIdError,
}) => {
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [disable, setDisable] = useState(false);
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.700" />;
  const [district, setDistrict] = useState();
  const handleChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleApply = (data) => {
    const name = user?.displayName;
    const phnNumber = data.phnNumber;
    const billSNumber = data.billSNumber;
    const billType = data.billType;
    const amount = data.amount;

    const paymentInfo = {
      name,
      phnNumber,
      billSNumber,
      billType,
      amount,
    };

    fetch("http://localhost:5000/pay-bills", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        console.log(window.location.replace(data.url));
        // toast.success(`Donate Success`);
        reset();
      });
  };
  const [size, setSize] = React.useState("lg");
  return (
    <div className="py-3">
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={size}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            <h2 className="py-2 text-lg md:text-4xl font-semibold">
              Payment Bills
            </h2>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="mb-5">
              <form onSubmit={handleSubmit(handleApply)}>
                <div className="form-control ">
                  <label className="text-base text-[#57647E]">
                    Account Name
                  </label>
                  <input
                    type="text"
                    {...register("accountName", {
                      required: "Account Name is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder={user?.displayName || "Please Sign In"}
                    defaultValue={user?.displayName}
                    readOnly
                  ></input>
                  {errors.accountName && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.accountName?.message}
                    </p>
                  )}
                </div>

                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    {...register("phnNumber", {
                      required: "Phone Number is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder="Phone Number"
                  ></input>
                  {errors.phnNumber && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.phnNumber?.message}
                    </p>
                  )}
                </div>

                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">
                    Bill Serial Number
                  </label>
                  <input
                    type="text"
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder="Bill Serial Number"
                    {...register("billSNumber", {
                      required: "Bill Serial Number is Required",
                    })}
                  ></input>
                  {errors.billSNumber && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.billSNumber?.message}
                    </p>
                  )}
                </div>

                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">Bill Type</label>
                  <Select
                    style={{
                      margin: "5px 0 10px",
                      width: "100%",
                      height: "50px",
                    }}
                    placeholder="Bill Type"
                    className="from-select border  px-[10px] rounded "
                    {...register("billType", {
                      required: "Bill Type is required",
                    })}
                  >
                    <option value="Electricity">Electricity</option>
                    <option value="Water">Water</option>
                    <option value="Gas">Gas</option>
                    <option value="Internet">Internet</option>
                    <option value="TeleVision">TeleVision</option>
                    <option value="Credit Card">Credit Card</option>
                  </Select>
                  {errors.billType && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.billType?.message}
                    </p>
                  )}
                </div>

                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">Amount</label>
                  <input
                    type="text"
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder="Amount"
                    {...register("amount", {
                      required: "Amount is required",
                    })}
                  ></input>
                  {errors.amount && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.amount?.message}
                    </p>
                  )}
                </div>

                <div className="my-4">
                  <button
                    onClick={onClose}
                    className="accent-btn sm-btn mt-5 mr-3"
                  >
                    Cancel
                  </button>
                  <button
                    className="primary-btn sm-btn mt-5"
                    value="Submit Form"
                    type="submit"
                    onClick={onClose}
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PaymentBillsModal;
