import { Tbody } from "@chakra-ui/react";
import { Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { default as React, useContext, useEffect, useState } from "react";
import { FaDonate } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";
const MyDonate = () => {
  const { user } = useContext(AuthContext);
  const [myDonate, setMyDonate] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/my-donate/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyDonate(data);
      });
  }, [user?.email]);

  console.log(myDonate);

  const totalAmount = myDonate.filter((data) => data.amount);
  const totalBills = totalAmount.reduce((total, preDonate) => {
    return parseInt(total) + parseInt(preDonate.amount);
  }, 0);

  return (
    <div className="donate-content md:ml-4">
      <div className="dashboard-title mb-5 md:flex items-center">
        <h2 className="text-[#010C3A] text-2xl md:mr-5 mb-4 md:mb-0 md:text-4xl font-bold ">
          My Donate History
        </h2>
      </div>
      <div
        style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
        className="donate-card flex items-center gap-2 py-5 rounded-md px-5 w-full h-[120px] md:w-96 bg-white"
      >
        <div className="mr-5">
          <FaDonate className="text-6xl text-[#9c0f55]" />
        </div>
        <div className="">
          <div className="text-[#808080] text-2xl mb-3">Total Donate</div>
          <h2 className="text-3xl font-bold ">$ {totalBills}</h2>
        </div>
      </div>
      <div className="donate-list">
        {/* <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="search-box bg-white mt-4 w-full md:w-96  rounded-md flex items-center py-1 px-3"
        >
          <Input
            ref={searchRef}
            className="border mr-2 border-black"
            placeholder="Name"
          />
          <Button
            className="sm-btn"
            borderRadius="4px"
            color="#fff"
            background="#010c3a"
            _hover={{ bg: "#df0303" }}
            // size="sm"
            // marginRight="5px"
            marginTop="0px"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div> */}
        <div className="mb-4">
          <TableContainer
            borderRadius={6}
            style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
            backgroundColor="white"
            marginY={5}
            // marginLeft={20}
            paddingBottom="20px"
            height={500}
            overflowY="scroll"
            overflowX="scroll"
          >
            <Table variant="simple">
              <Thead className="py-2 rounded-t-md bg-[#041C51]">
                <Tr className=" rounded-t-md ">
                  <Th color="#fff" fontSize={14}>
                    List
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Name
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Phone
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Currency
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Id
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Amount
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {myDonate?.map((donate, index) => (
                  <Tr key={donate?._id}>
                    <Td>{index + 1}</Td>
                    <Td>{donate?.donarName}</Td>
                    <Td>{donate?.donarPhnNumber}</Td>
                    <Td>{donate?.currency}</Td>
                    <Td>{donate?.transactionId}</Td>
                    <Td>$ {donate?.amount}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default MyDonate;
