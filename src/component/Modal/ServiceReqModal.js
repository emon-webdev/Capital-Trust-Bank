import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import { Select } from "@chakra-ui/react";
import { default as React, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
const ServiceReqModal = ({ slidersContents, onClose, isOpen }) => {
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [applierEmail, setApplierEmail] = useState({});

  useEffect(() => {
    fetch(
      `https://capital-trust-bank-server-ten.vercel.app/bankAccounts/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setApplierEmail(data);
      });
  }, []);

  // apply for credit card
  const handleServiceReq = (data) => {
    const name = user?.displayName;
    const email = user?.email;
    const serviceName = data.serviceReq;
    const accountId = data.accountId;


    if (applierEmail.accountId === accountId) {
      const ServiceReceiver = {
        name,
        email,
        serviceName,
        accountId,
      };
      fetch(
        `https://capital-trust-bank-server-ten.vercel.app/emgyServiceReceiver`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ServiceReceiver),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Apply Success for Emergency Service Request");
            reset();
          }
        });
    } else {
    }
  };

  return (
    <div className="py-3">
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h2 className="pt-2 text-lg md:text-2xl font-semibold">
              Emergency Services
            </h2>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="mb-5">
              <form onSubmit={handleSubmit(handleServiceReq)}>
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
                <div className="form-control ">
                  <label className="text-base text-[#57647E]">Your Email</label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder={user?.email}
                    defaultValue={user?.email}
                    readOnly
                  ></input>
                  {errors.email && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.email?.message}
                    </p>
                  )}
                </div>

                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">Account Id</label>
                  <input
                    type="text"
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder={applierEmail?.accountId}
                    {...register("accountId", {
                      required: "Account Id is Required",
                    })}
                    readOnly
                    defaultValue={applierEmail?.accountId}
                  ></input>
                </div>
                {errors.accountId && (
                  <p className="text-red-600 text-sm mb-0">
                    {errors.accountId?.message}
                  </p>
                )}
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">
                    Service Name
                  </label>
                  <Select
                    style={{
                      margin: "5px 0 10px",
                      width: "100%",
                      height: "50px",
                    }}
                    // placeholder="Select Service"
                    className="from-select border  px-[10px] rounded "
                    {...register("serviceReq", {
                      required: "serviceReq is required",
                    })}
                    defaultValue="Cheque Book / DD  Related"
                  >
                    <option value="Cheque Book / DD  Related">
                      Cheque Book / DD Related
                    </option>
                    <option value="Credit / Debit Card  Related">
                      Credit / Debit Card Related
                    </option>
                    <option
                      disabled
                      className="text-[#f87171]"
                      value="Account Details  Changing"
                    >
                      Mobile / Internet Banking
                    </option>
                    <option
                      disabled
                      className="text-[#f87171]"
                      value="Apply for Credit Card"
                    >
                      Account Details Changing
                    </option>
                    <option value="Funds Remittance">
                      Apply for Credit Card
                    </option>
                  </Select>
                  {errors.cardType && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.cardType?.message}
                    </p>
                  )}
                </div>
                <div className="from-group my-4 ">
                  <div className="form-control flex items-center w-full">
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="term"
                      id="terms"
                      required
                      {...register("term", {
                        required: "Term and every field are required",
                      })}
                    />
                    <label htmlFor="terms">
                      I agree to terms and conditions
                    </label>
                  </div>
                  {errors.term && (
                    <p className="text-red-600 ml-[32px]">
                      {errors.term?.message}
                    </p>
                  )}
                </div>
                <div className="my-4">
                  <button
                    className="primary-btn sm-btn mt-5"
                    value="Submit Form"
                    type="submit"
                    onClick={onClose}
                  >
                    Submit
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

export default ServiceReqModal;
