import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import { Select } from "@chakra-ui/select";
import { default as React, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
const CreditCardModal = ({ onClose, isOpen, overlay }) => {
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [applierEmail, setApplierEmail] = useState({});
  const [disable, setDisable] = useState(false);
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.700" />;
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_KEY}/bankAccounts/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setApplierEmail(data);
      });
  }, [user?.email]);
  // apply for credit card
  const handleApply = (data) => {
    const applierName = user?.displayName;
    const applierPhnNumber = data.applierPhnNumber;
    const accountId = data.accountId;
    const cardType = data.cardType;
    const applierInfo = {
      applierName,
      applierPhnNumber,
      accountId,
      cardType,
    };
    fetch(`${process.env.REACT_APP_API_KEY}/cardAppliers`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applierInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Apply Success for card");
          reset();
        }
      });
    // .then((error) => toast.error(error));
  };

  return (
    <div className="py-3">
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            <h2 className="py-2 text-lg md:text-4xl font-semibold">
              Apply for Credit Card
            </h2>
          </ModalHeader>
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
                    defaultValue={applierEmail?.accountId}
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
                  {disable ? (
                    <button
                      className={`disable sm-btn mt-5 cursor-pointer`}
                      type="submit"
                      onClick={onClose}
                    >
                      Apply Now
                    </button>
                  ) : (
                    <button
                      className="primary-btn sm-btn mt-5"
                      value="Submit Form"
                      type="submit"
                      onClick={onClose}
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </form>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreditCardModal;
