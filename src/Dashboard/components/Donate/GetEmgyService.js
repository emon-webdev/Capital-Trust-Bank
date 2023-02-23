import { Input } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import React, { useContext, useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import chequeLogo from "../../../assets/logo/mainlogo.png";
import { AuthContext } from "../../../context/AuthProvider";
const GetEmgyService = () => {
  const { user } = useContext(AuthContext);

  const [chequeBook, setChequeBook] = useState([]);
  useEffect(() => {
    fetch(
      `https://capital-trust-bank-server-ten.vercel.app/getEmgyServiceReq/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChequeBook(data);
      });
  }, [user?.email]);
  const handleDownload = (event) => {
    event.preventDefault();
    const card = document.getElementById("cheque-book");
    html2canvas(card).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${chequeBook?.accountId}-card.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div>
      <h2 className="text-[#010C3A] text-3xl md:text-4xl font-bold mb-6">
        Get Emergency Service
      </h2>
      <div className="emgy-service max-w-[820px]">
        {chequeBook?.accountId ? (
          <>
            <div
              id="cheque-book"
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
                  <p className="text-white">
                    Cheque Id: {chequeBook?.chequeId}
                  </p>
                </div>
              </div>
              <div className="cheque-body py-6 px-4 ">
                <div className="cheque-info flex items-center justify-between">
                  <div className="user-info w-full ">
                    <h3 className="text-[#041C51] mb-3 font-semibold">
                      Name: {chequeBook?.name}
                    </h3>
                    <h4 className="text-[#041C51] mb-3 font-semibold">
                      Account Id: {chequeBook?.accountId}
                    </h4>
                    <h4 className="text-[#041C51] mb-3 font-semibold">
                      Routing No: {chequeBook?.routingNo}
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
                <div className="random-id text-white">
                  {chequeBook?.randomId}
                </div>
                <div className="signature flex items-center ">
                  <p className="text-white mr-2">Signature:</p>
                  <Input
                    className="border-0 placeholder-[#fff] text-white focus:outline-none border-b-2"
                    htmlSize={4}
                    width="auto"
                    placeholder="Signature"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={handleDownload}
                className="primary-btn bg-[#041C51]"
              >
                Get A Checkbook
              </button>
            </div>
          </>
        ) : (
          <span>You did not apply for card or wait for Bank approval</span>
        )}
      </div>
    </div>
  );
};

export default GetEmgyService;
