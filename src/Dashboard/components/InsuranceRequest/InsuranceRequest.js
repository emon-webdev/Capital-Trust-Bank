import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const InsuranceRequest = () => {
  const [reFetch, setReFetch] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/insuranceApplicants`)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, [reFetch]);

  const handleAccept = (data) => {
    fetch(`http://localhost:5000/acceptInsuranceReq`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Insurance request accept");
        setReFetch(!reFetch);
      });
  };

  const handleDelete = (data) => {
    const info = {
      id: data._id,
    };
    fetch(`http://localhost:5000/deleteInsuranceReq`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("Insurance Request cancel");
        setReFetch(!reFetch);
      });
  };

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
                  <button
                    className="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a] m-1"
                    onClick={() => handleAccept(customer)}
                  >
                    Accept
                  </button>
                  <button
                    className="text-md sm-btn primary-btn exchange-btn bg-[#df0303]"
                    onClick={() => handleDelete(customer)}
                  >
                    Cancel
                  </button>
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
