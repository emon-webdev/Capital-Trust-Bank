import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../context/AuthProvider";

const SentMoney = () => {
  const { user } = useContext(AuthContext);
  const [approve, setApprove] = useState([]);
  useEffect(() => {
    fetch(`https://capital-trust-bank-server-ten.vercel.app/approved/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApprove(data);
      });
  }, [user]);

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
      fetch(`https://capital-trust-bank-server-ten.vercel.app/sentMoney`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.isSuccessful) {
            toast.success(`Money transition successful`);
          } else {
            toast.error(`Id not find`);
          }
        });
    } else {
      toast.error(`You don't have enough balance`);
    }
  };

  return (
    <div>
      <h1>Available Money:${approve.availableAmount}</h1>

      <form onSubmit={(event) => handleSent(event)}>
        <input name="amount" placeholder="Amount"></input>
        <input name="id" placeholder="id"></input>
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
