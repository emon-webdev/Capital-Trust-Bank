import { Flex, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { AuthContext } from "../../../../context/AuthProvider";

export default function MyAccount() {
  const { user } = useContext(AuthContext);
  const [transacData, setTransacData] = useState([]);

  useEffect(() => {
    fetch(
      `https://capital-trust-bank-server.vercel.app/depositWithdraw/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setTransacData(data));
  }, []);

  const withdrawData = transacData.filter((data) => data.type === "withdraw");
  const totalWithdraw = withdrawData.reduce((total, withdr) => {
    return total + parseInt(withdr.withdraw);
  }, 0);

  const depositData = transacData.filter((data) => data.type === "deposit");
  const totalDeposit = depositData.reduce((total, depo) => {
    return total + parseInt(depo.deposit);
  }, 0);

  return (
    <div className="container ">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <Flex
          align={"center"}
          justify="center"
          marginX="10"
          gap={10}
          marginY={10}
          borderRadius="10"
          width="500px"
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
              {totalDeposit}
            </Text>
            <Text color={"grey"} fontSize={28} marginTop={10}>
              Available Balance
            </Text>
          </div>
        </Flex>

        <Flex
          align={"center"}
          justify="center"
          marginX="10"
          gap={10}
          marginY={10}
          borderRadius="10"
          width="500px"
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
              {totalWithdraw}
            </Text>
            <Text color={"grey"} fontSize={28} marginTop={10}>
              Withdraw Balance
            </Text>
          </div>
        </Flex>
      </div>
      <div style={{ height: "600px", width: "600px" }} className="mx-10 ">
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
