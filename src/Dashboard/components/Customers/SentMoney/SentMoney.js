import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../context/AuthProvider";

const SentMoney = () => {
  const { user } = useContext(AuthContext);
  const [approve, setApprove] = useState([]);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/approved/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setApprove(data);
      });
  }, [user, refetch]);

  const handleSent = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    const amount = parseFloat(event.target.amount.value);
    const info = {
      senderEmail: user?.email,
      id: id,
      amount: amount,
    };
    if (amount <= parseFloat(approve.availableAmount)) {
      fetch(`${process.env.REACT_APP_API_KEY}/sentMoney`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.isSuccessful) {
            toast.success(`Money transition successful`);
            event.target.reset();
            setRefetch(!refetch);
          } else {
            toast.error(`Id not find`);
          }
        });
    } else {
      toast.error(`You don't have enough balance`);
    }
  };

  return (
    <div className="container bg-white my-10 mx-auto shadow-lg rounded p-5 text-center w-10/12 lg:w-1/2">
      <h1 className="text-[26px] p-2 font-semibold">
        Available Money:${approve?.availableAmount}
      </h1>

      <form onSubmit={(event) => handleSent(event)}>
        <input
          className="border w-full p-3 rounded focus-visible:outline-none text-black"
          name="amount"
          placeholder="Amount"
        ></input>
        <input
          className="border w-full p-3 rounded focus-visible:outline-none text-black"
          name="id"
          placeholder="id"
        ></input>
        <button
          type="submit"
          className="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a]"
        >
          Sent
        </button>
      </form>
    </div>
  );
};

export default SentMoney;
