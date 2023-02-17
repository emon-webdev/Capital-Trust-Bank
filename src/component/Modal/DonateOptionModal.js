import {
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
const DonateOptionModal = ({ onClose, isOpen }) => {
  const { user } = useContext(AuthContext);
  const [size, setSize] = React.useState("lg");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const date = new Date();
  // apply for credit card
  const handleDonate = (data) => {
    // event.preventDefault();
    const donateDate = date;
    const donarName = user?.displayName;
    const donarPhnNumber = data.donarPhnNumber;
    const donarEmail = user?.email;
    const currency = data.currency;
    const amount = parseInt(data.amount);

    const donate = {
      donateDate,
      donarName,
      donarPhnNumber,
      donarEmail,
      currency,
      amount,
    };
    fetch("http://localhost:5000/donate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donate),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        reset();
      });
  };

  return (
    <div data-testid="modal">
      <Modal
        size={size}
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h2 className="py-2 text-lg md:text-4xl font-semibold">Donate </h2>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <form onSubmit={handleSubmit(handleDonate)}>
                <div className="form-control ">
                  <label className="text-base text-[#57647E]">Your Name</label>
                  <input
                    type="text"
                    {...register("donarName", {
                      required: "Account Name is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder="Name"
                    defaultValue={user?.displayName}
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
                    placeholder="Email"
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
                  <label className="text-base text-[#57647E]">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    {...register("donarPhnNumber", {
                      required: "Phone Number is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                    placeholder="Phone Number"
                  ></input>
                  {errors.donarPhnNumber && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.donarPhnNumber?.message}
                    </p>
                  )}
                </div>
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">Currency</label>
                  <Select
                    style={{
                      margin: "5px 0 10px",
                      width: "100%",
                      height: "50px",
                    }}
                    placeholder="Card Type"
                    className="from-select border  px-[10px] rounded "
                    {...register("currency", {
                      required: "Currency is required",
                    })}
                  >
                    <option value="BDT">BDT</option>
                    <option value="USD">USD</option>
                  </Select>
                  {errors.cardType && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.cardType?.message}
                    </p>
                  )}
                </div>
                <div className="form-control ">
                  <label className="text-base text-[#57647E]">Amount</label>

                  <InputGroup className="mb-2 mt-1">
                    <InputLeftElement
                      className="h-[50px]"
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children="$"
                    />
                    <Input
                      type="number"
                      {...register("amount", {
                        required: "Amount is required",
                      })}
                      placeholder="Donate Amount"
                    />
                  </InputGroup>
                  {errors.monthlySalary && (
                    <p className="text-red-600">
                      {errors.monthlySalary?.message}
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
                    className={`sm-btn mt-5 cursor-pointer`}
                    type="submit"
                    onClick={onClose}
                  >
                    Donate
                  </button>
                </div>
              </form>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DonateOptionModal;
