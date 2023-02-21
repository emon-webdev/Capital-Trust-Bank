import React, { useContext } from "react";
import chequeLogo from "../../../assets/logo/mainlogo.png";

import { Input } from "@chakra-ui/react";
import { BsCurrencyDollar } from "react-icons/bs";
import { AuthContext } from "../../../context/AuthProvider";
const GetEmgyService = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <h2 className="text-[#010C3A] text-3xl md:text-4xl font-bold mb-6">
        Get Emergency Service
      </h2>
      <div className="emgy-service">
        <div
          className="cheque-book bg-white"
          style={{ boxShadow: "rgba(87, 100, 126, 0.21) 0px 4px 4px;" }}
        >
          <div
            style={{
              // background: "rgb(1,12,58)",
              background:
                // "linear-gradient(90deg, rgba(1,12,58,1) 0%, rgba(223,3,3,0.39859390688372087) 83%)",
                "linear-gradient(90deg, #000851 0%, #1CB5E0 100%)",
            }}
            className="cheque-head py-2 px-4 flex items-center justify-between"
          >
            <div className="cheque-logo flex items-center">
              <img src={chequeLogo} alt="" srcset="" />
              <span className="font-bold text-[32px] ml-1 text-[#fff]">
                C<span className=" text-[#DF0303]">T</span>B
              </span>
            </div>
            <div className="cheque-number ">
              <p className="text-white">Cheque Id: 908098</p>
            </div>
          </div>
          <div className="cheque-body py-6 px-4 ">
            <div className="cheque-info flex items-center justify-between">
              <div className="user-info w-full ">
                <h3 className="text-[#041C51] mb-3 font-semibold">Name: </h3>
                <h4 className="text-[#041C51] mb-3 font-semibold">
                  Account Id:{" "}
                </h4>
                <h4 className="text-[#041C51] mb-3 font-semibold">
                  Routing No:{" "}
                </h4>
              </div>
              <div className="issue-date">
                <input
                  type="date"
                  className="border  rounded w-full max-w-[168px] px-[10px]"
                  placeholder="Date"
                ></input>
              </div>
            </div>
            <div className="cheque-amount  flex items-center justify-between">
              <div className="info-input w-full">
                <div className="form-control mb-4  flex items-center w-full  md:mr-4">
                  <label className="text-base mr-2 basis-2/12 text-medium font-semibold text-[#57647E]">
                    Pay:
                  </label>
                  <input
                    type="text"
                    className="border-0 focus:outline-none border-b-2 w-full px-[10px]"
                    placeholder=""
                  ></input>
                </div>
                <div className="form-control mb-4 text-medium flex items-center w-full  md:mr-4">
                  <label className="text-base mr-2 basis-2/12 text-medium font-semibold text-[#57647E]">
                    To The Order Of:
                  </label>
                  <input
                    type="text"
                    className="border-0 focus:outline-none border-b-2  w-full px-[10px]"
                    placeholder=""
                  ></input>
                </div>
              </div>
              <div className="flex items-center ml-4">
                <div className="dollar mr-3">
                  <span>
                    <BsCurrencyDollar className="text-4xl" />
                  </span>
                </div>
                <div className="amount">
                  <Input
                    className="border-0 focus:outline-none border-b-2"
                    htmlSize={4}
                    width="168px"
                    height="70px"
                    placeholder="Amount"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              // background: "rgb(1,12,58)",
              background:
                // "linear-gradient(90deg, rgba(1,12,58,1) 0%, rgba(223,3,3,0.39859390688372087) 83%)",
                "linear-gradient(90deg, #000851 0%, #1CB5E0 100%)",
            }}
            className="cheque-footer py-2 px-4 flex items-center justify-between"
          >
            <div className="random-id text-white">089d243342209</div>
            <div className="signature flex items-center ">
              <p className="text-white mr-2">Signature:</p>
              <Input
                className="border-0 text-white focus:outline-none border-b-2"
                htmlSize={4}
                width="auto"
                placeholder="Signature"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <button className="primary-btn bg-[#041C51]">Get A Checkbook</button>
        </div>
      </div>
    </div>
  );
};

export default GetEmgyService;
