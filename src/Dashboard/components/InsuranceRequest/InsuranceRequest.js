import { Button } from "@chakra-ui/react";
import React from "react";
import { useGetInsuranceApplicantsQuery } from "../../../features/api/apiSlice";

const InsuranceRequest = () => {
  const { data: customers } = useGetInsuranceApplicantsQuery();
  return (
    <div className="my-2 mb-6">
      <h2 className="text-[#010C3A] text-3xl md:text-4xl font-bold mb-6">
        Total Insurance Request:{customers?.length}
      </h2>
      <div className="insurance grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {customers?.map((customer) => {
          return (
            <>
              <div className="flex flex-col py-3 rounded-md px-4 transition-colors duration-300 transform bg-white  group ">
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
                  {customer?.name}
                </h1>
                <p className="mt-2 text-gray-500 capitalize">
                  <strong>Email:</strong> {customer?.email}
                </p>
                <p className="mt-2 text-gray-500 capitalize">
                  <strong>Phone:</strong> {customer?.phone}
                </p>
                <p className="mt-2 text-gray-500 capitalize">
                  <strong>City:</strong> {customer?.city}
                </p>
                <p className="mt-2 text-gray-500 capitalize">
                  <strong>Date:</strong> {customer?.date}
                </p>
                <p className="mt-2 text-gray-500 capitalize">
                  <strong>insurance Type:</strong> {customer?.insurance}
                </p>
                <div className="flex mt-3 mb-2">
                  <Button
                    borderRadius="4px"
                    color="#fff"
                    background="#010c3a"
                    _hover={{ bg: "#df0303" }}
                    size="sm"
                    marginRight="5px"
                  >
                    Accept
                  </Button>
                  <Button
                    borderRadius="4px"
                    color="#fff"
                    background="#df0303"
                    _hover={{ bg: "#010c3a" }}
                    size="sm"
                    marginRight="5px"
                  >
                    Cancel
                  </Button>

                  {/* <button className="text-lg mr-2 fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a]"></button>
                  <button className="text-md sm-btn primary-btn exchange-btn bg-[#df0303]">
                    Cancel
                  </button> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default InsuranceRequest;
