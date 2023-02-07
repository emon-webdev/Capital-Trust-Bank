import { useDisclosure } from "@chakra-ui/hooks";
import { ModalOverlay } from "@chakra-ui/modal";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import creditCardImg from "../../assets/apply-loan/credit-card-img.png";
import CreditCardModal from "../../component/CreditCardModal.js/CreditCardModal";
import { AuthContext } from "../../context/AuthProvider";

const ApplyCreditCard = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // const [idError, setIdError] = useState([]);
  // const [applierEmail, setApplierEmail] = useState([]);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      // backdropFilter="blur(6px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/users?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApplierEmail(data[0]);
  //     });
  // }, []);
  // // if (loading) {
  // //   return <Spinner />;
  // // }

  // // apply for credit card
  // const handleApply = (data) => {
  //   // event.preventDefault();
  //   setIdError("");
  //   const applierName = user?.displayName;
  //   const accountId = data.accountId;
  //   if (applierEmail?._id === accountId) {
  //     const applierInfo = {
  //       applierName,
  //       accountId,
  //     };
  //     fetch(`http://localhost:5000/cardAppliers`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(applierInfo),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.acknowledged) {
  //           console.log(data);
  //           toast.success("Apply Success for card");
  //           reset();
  //         }
  //       })
  //       .then((error) => console.error(error));
  //   } else {
  //     setIdError("Account Id did't match");
  //   }
  // };

  return (
    <div className="credit-card-area py-16">
      <div className="container">
        <div className="credit-card-wrap flex column-reverse md:flex-row items-center">
          <div className="credit-card-img mb-[32px] md:mb-0 md:mr-12">
            <img src={creditCardImg} className="w-full" alt="" srcSet="" />
          </div>
          <div className="credit-card-content dot-shape">
            <h2 className=" text-3xl md:text-4xl font-semibold">
              Apply for Credit Card
            </h2>
            <p className="py-3">
              Porttitor ornare fermentum aliquam pharetra ut facilisis gravida
              risus suscipit. dui feugiat fusce 
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>The master-builder of great explorer</span>
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>Velit esse cillum dolore eu fugiat nulla pariatur.</span>
            </p>
            <p className="flex font-semibold text-[#010C3A] mb-2 ">
              <span className="">
                <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
              </span>
              <span>Velit esse cillum dolore eu fugiat nulla pariatur.</span>
            </p>
            <div>
              <button
                className="primary-btn mt-5"
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              >
                Apply Now
              </button>
            </div>
            <div className="my-2 mt-3">
              {/* <form onSubmit={handleSubmit(handleApply)}>
                <div>
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
                    <label className="text-base text-[#57647E]">
                      Account Id
                    </label>
                    <input
                      type="number"
                      className="border mb-2 mt-1 rounded w-full h-11 px-[10px]"
                      placeholder="Id Number"
                      {...register("accountId", {
                        required: "Account Id is Required",
                        minLength: {
                          value: 24,
                          message: "Account Id Minimum 24 character",
                        },
                      })}
                    ></input>
                  </div>
                  {errors.accountId && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.accountId?.message}
                    </p>
                  )}
                  <div>
                    <button
                      className="primary-btn mt-5"
                      onClick={() => {
                        setOverlay(<OverlayOne />);
                        onOpen();
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <CreditCardModal
        onClose={onClose}
        setOverlay={setOverlay}
        isOpen={isOpen}
        overlay={overlay}
        onOpen={onOpen}
        OverlayOne={OverlayOne}
      />
    </div>
  );
};

export default ApplyCreditCard;
