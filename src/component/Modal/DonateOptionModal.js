import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    Select
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
const DonateOptionModal = ({ onClose, isOpen, onOpen }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [size, setSize] = React.useState("xl");

  // apply for credit card
  const handleApply = (data) => {
    // event.preventDefault();
    const applierName = data.name;
    const applierPhnNumber = data.applierPhnNumber;
    const accountId = data.accountId;
    const cardType = data.cardType;
    const applierInfo = {
      applierName,
      applierPhnNumber,
      accountId,
      cardType,
    };

    console.log(applierInfo);
  };

  return (
    <div>
      <Modal
        size={size}
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalContent>
          <ModalHeader>
            <h2 className="py-2 text-lg md:text-4xl font-semibold">
              Apply for Credit Card
            </h2>
          </ModalHeader>
          <ModalBody>
            <div className="mb-5">
              <div onSubmit={handleSubmit(handleApply)}>
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
                    placeholder="Name"
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
                    {...register("applierPhnNumber", {
                      required: "Phone Number is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder="Phone Number"
                  ></input>
                  {errors.applierPhnNumber && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.applierPhnNumber?.message}
                    </p>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">Account Id</label>
                  <input
                    type="text"
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder="Id Number"
                    {...register("accountId", {
                      required: "Account Id is Required",
                    })}
                  ></input>
                </div>
                {errors.accountId && (
                  <p className="text-red-600 text-sm mb-0">
                    {errors.accountId?.message}
                  </p>
                )}
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">Card Type</label>
                  <Select
                    style={{
                      margin: "5px 0 10px",
                      width: "100%",
                      height: "50px",
                    }}
                    placeholder="Card Type"
                    className="from-select border  px-[10px] rounded "
                    {...register("cardType", {
                      required: "Card Type is required",
                    })}
                  >
                    <option value="CreditCard">Credit Card</option>
                    <option value="DebitCard">Debit Card</option>
                    <option value="MasterCard">Master Card</option>
                    <option value="VISACard">VISA Card</option>
                  </Select>
                  {errors.cardType && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.cardType?.message}
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
                    className={`disable sm-btn mt-5 cursor-pointer`}
                    type="submit"
                    onClick={onClose}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DonateOptionModal;
