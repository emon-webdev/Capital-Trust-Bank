import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Link } from "react-router-dom";
import sideimg from "../../assets/loanCalculator/emi-calculator.jpg";
import "./LoanCalculator.css";
AOS.init();

class LoanCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      value1: 0,
      value2: null,
      value3: null,
      output: null,
    };
  }

  DrageChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  Eligbilitysumbit = (e) => {
    e.preventDefault();

    const { value1, value2, value3 } = this.state;
    let r = value2 / (12 * 100);
    let t = value1;
    let final = (value3 * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
    let finalOut = final.toFixed(0);

    this.setState({
      output: finalOut,
    });
  };

  render() {
    const { value1, value2, value3, output } = this.state;
    return (
      <div className="online-calculator-area py-12">
        <div className="container">
          <div className="section-title w-full mb-4 md:w-[650px] mx-auto text-center">
            <h2 className="text-[#DF0303] text-xl text-md mb-3">
              -- EMI Calculator --
            </h2>
            <h1 className="text-[#010C3A] md:leading-[48px] text-4xl md:text-[40px] font-bold mb-6">
              EMI Online Calculator
            </h1>
          </div>
          <div className="md:flex justify-center">
            <div className="basis-full emi-img md:basis-[30%]">
              <img className="img" src={sideimg} alt="" />
            </div>
            <div className="card-main basis-full md:basis-[70%]">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="mb-0 text-[#010C3A] text-xl font-semibold">
                      Loan Amount
                    </h1>
                    <input
                      type="range"
                      min="10000"
                      max="1000000"
                      name="value3"
                      step="1000"
                      onChange={this.DrageChange}
                      id="curser"
                      className="w-96 mr-3"
                    />
                  </div>
                  <h1 className="border">${value3}</h1>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="mb-0 text-[#010C3A] text-xl font-semibold">
                      Loan Term
                    </h1>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      name="value1"
                      onChange={this.DrageChange}
                      id="curser"
                      className="w-96 mr-3"
                    />
                  </div>
                  <h1 className="border">{value1}Months</h1>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="mb-0 text-[#010C3A] text-xl font-semibold">
                      Interest Rate
                    </h1>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      name="value2"
                      step=".5"
                      onChange={this.DrageChange}
                      id="curser"
                      className="w-96 mr-3"
                    />
                  </div>
                  <h1 className="border">{value2}%</h1>
                </div>
              </div>

              <div className="card-second">
                <div className="first-portion flex gap-3">
                  <div className="text basis-2/4 ">
                    <h1 className="text-[#010C3A] text-xl font-medium">
                      Total Loan =${value3}
                    </h1>
                    <h1 className="text-[#010C3A] text-xl font-medium">
                      Total Months={value1}
                    </h1>
                    <h1 className="text-[#010C3A] text-xl font-medium">
                      Total Interest={value2}%
                    </h1>
                    <div className="mt-2">
                      <Link to="/accountOpenFrom" className="sm-btn">
                        Apply
                      </Link>
                    </div>
                  </div>
                  <div className="basis-2/4 mt-4 md:mt-0">
                    <h1 className="text-2xl font-medium">
                      Total <br /> Amount=${output}
                    </h1>
                    <button className="sm-btn" onClick={this.Eligbilitysumbit}>
                      Calculate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoanCalculator;
