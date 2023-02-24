import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import errorLottie from "../../assets/Error/error.json";

const Error = () => {
  return (
    <div style={{ background: "#FFF8F5" }}>
      <section className="flex items-center h-[100vh] p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-4 font-extrabold text-9xl text-[#df0303]">
              <Lottie animationData={errorLottie} />
            </h2>
            <p className="text-2xl font-semibold text-[#010c3a] md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 mt-5 font-semibold rounded secondary-btn text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
