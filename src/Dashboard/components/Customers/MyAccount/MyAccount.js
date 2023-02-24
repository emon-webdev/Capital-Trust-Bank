import { parseInt } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { AuthContext } from "../../../../context/AuthProvider";
import useTitle from "../../../../hooks/useTitle/useTitle";

export default function MyAccount() {
  useTitle("MyAccount");
  const { user } = useContext(AuthContext);
  const [approve, setApprove] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_KEY}/approved/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setApprove(data));
  }, []);

  const [transacData, setTransacData] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_KEY}/depositWithdraw/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTransacData(data);
      });
  }, []);

  const withdrawData = transacData.filter((data) => data.type === "withdraw");

  const totalWithdraw = withdrawData.reduce((total, withdr) => {
    return total + parseInt(withdr.withdraw);
  }, 0);

  const depositData = transacData.filter((data) => data.type === "deposit");
  const totalDeposit = depositData.reduce((total, depo) => {
    return total + parseInt(depo.deposit);
  }, 0);

  const initialDeposit =
    parseInt(approve.initialDeposit) + totalDeposit - totalWithdraw;

  return (
    <div className="">
      <div className="md:ml-4 flex flex-col md:flex-col md:align-items-center  md:w-[100%] lg:flex-row">
        <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="donate-card md:mr-4 flex flex-wrap items-center gap-2 py-5 rounded-md px-5 w-full h-[140px] md:w-96 bg-white mb-5 lg:mb-0"
        >
          <div className="mr-5">
            <MdOutlineAccountBalanceWallet className="text-4xl text-blue-800" />
          </div>
          <div className="">
            <span className="text-[#808080] text-lg">
              {" "}
              Monthly Cost <span className="text-[#DF0303]"> 1 %</span>
            </span>
            <div className="text-[#808080] text-2xl mb-1">
              {" "}
              Available Balance
            </div>
            <h2 className="text-3xl font-bold ">
              $ {approve.availableAmount}
              {/* $ {initialDeposit < 0 ? 0 : initialDeposit ? initialDeposit : 0} */}
            </h2>
          </div>
        </div>
        <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="donate-card md:mr-4 flex flex-wrap items-center gap-2 py-5 rounded-md px-5 w-full h-[140px] md:w-96 bg-white"
        >
          <div className="mr-5">
            {/* <FaDonate className="text-6xl text-[#9c0f55]" /> */}
            {/* <MdOutlineAccountBalanceWallet className="text-4xl text-blue-800" /> */}
            <AiOutlineMinusSquare className="text-4xl text-[#9c0f55]" />
          </div>
          <div className="">
            <div className="text-[#808080] text-2xl mb-3">
              {" "}
              Withdraw Balance
            </div>
            <h2 className="text-3xl font-bold ">
              $ {totalWithdraw < 0 ? 0 : totalWithdraw}
            </h2>
          </div>
        </div>
        {/* <Flex
          align={"center"}
          justify="center"
          marginX="5"
          gap={5}
          marginY={10}
          borderRadius="10"
          width="400px"
          height={"200px"}
          backgroundColor="white"
          boxShadow={"xl"}
        >
          <Flex
            h={14}
            w={14}
            borderRadius={5}
            align="center"
            justify={"center"}
            bg="#93c3ef"
            marginBottom={8}
          >
            <MdOutlineAccountBalanceWallet className="text-4xl text-blue-800" />
          </Flex>

          <div className="mt-5">
            <Text fontSize={50}>
              <span>$</span>
              {approve.availableAmount}
            </Text>
            <Text color={"grey"} fontSize={28} marginTop={10}>
              Available Balance
            </Text>
          </div>
        </Flex> */}

        {/* <Flex
          align={"center"}
          justify="center"
          marginX="10"
          gap={5}
          marginY={10}
          borderRadius="10"
          width="400px"
          height={"200px"}
          backgroundColor="white"
          boxShadow={"xl"}
        >
          <Flex
            h={14}
            w={14}
            borderRadius={5}
            align="center"
            justify={"center"}
            bg="#ec88b9"
            marginBottom={8}
          >
            <AiOutlineMinusSquare className="text-4xl text-[#9c0f55]" />
          </Flex>

          <div className="mt-5">
            <Text fontSize={50}>
              <span>$</span>
              {totalWithdraw < 0 ? 0 : totalWithdraw}
            </Text>
            <Text color={"grey"} fontSize={28} marginTop={10}>
              Withdraw Balance
            </Text>
          </div>
        </Flex> */}
      </div>
      <div
        //  style={{ height: "600px", width: "600px" }}
        className="md:mx-8 h-[600px] w-full  md:w-[600px]"
      >
        <VictoryChart
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          theme={VictoryTheme.material}
        >
          <VictoryLine
            style={{
              width: "800px",
              data: { stroke: "#c43a31" },

              parent: { border: "2px solid #ddd" },
            }}
            data={[
              { x: "jan", y: 200 },
              { x: "feb", y: 300 },
              { x: "march", y: 500 },
              { x: "april", y: 1000 },
              { x: " may", y: 800 },
              { x: "june", y: 500 },
            ]}
          />
        </VictoryChart>
      </div>
    </div>
  );
}
