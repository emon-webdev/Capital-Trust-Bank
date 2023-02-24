import html2canvas from "html2canvas";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import VisaTransaction from "../MyTransaction/VisaTransaction";

const TakeCard = () => {
  const { user } = useContext(AuthContext);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_KEY}/takeCard/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, [user?.email]);
  const handleDownload = (event) => {
    event.preventDefault();
    const card = document.getElementById("credit-card");
    html2canvas(card).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${info?.accountId}-card.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };
  return (
    <div className="text-center">
      {info?.accountId ? (
        <>
          {" "}
          <VisaTransaction info={info}></VisaTransaction>
          <button
            className="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a]"
            type="submit"
            onClick={handleDownload}
          >
            Download
          </button>{" "}
        </>
      ) : (
        <span>You did not apply for card or wait for approval</span>
      )}
    </div>
  );
};

export default TakeCard;
