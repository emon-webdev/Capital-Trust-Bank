import React from "react";
import { Link } from "react-router-dom";
import sideimg from "../../assets/loanCalculator/emi-calculator.jpg";
import "./LoanCalculator.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    //-------EMI coding formula------
    // r = r / (12 * 100); // one month interest
    // t = t * 12; // one month period
    // emi = (p * r * pow(1 + r, t)) / (pow(1 + r, t) - 1);

    // return (emi);

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
      <div className="online-calculator-area">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mt-7">
            EMI Online Calculator
          </h1>
          <div className="md:flex justify-center">
            <div>
              <img className="img" src={sideimg} alt="" />
            </div>
            <div className="card-main">
              <div>

                <div className="flex justify-center">
                  <div>
                    <h1 className="text-lg mb-0 mt-3">Loan Amount</h1>
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
                <div className="flex justify-center">
                  <div>
                    <h1 className="text-lg mb-0">Loan Term</h1>
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
                <div className="flex justify-center">
                  <div>
                    <h1 className="text-lg mb-0">Interest Rate</h1>
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
                <div className="first-portion">
                  <button
                    className="secondary-btn sm-btn"
                    onClick={this.Eligbilitysumbit}
                  >
                    Calculate
                  </button>
                  <div className="text">
                    <h1>Total Loan Amount=${value3}</h1>
                    <h1>Total Months={value1}</h1>
                    <h1>Total Interest={value2}%</h1>
                  </div>
                </div>
                <div className="second-portion">
                  <div>
                    <h1 className="text-2xl">Total Amount={output}</h1>
                  </div>
                  <div>
                    <Link to="/accountOpenFrom" className="secondary-btn sm-btn">
                      Apply
                    </Link>
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
