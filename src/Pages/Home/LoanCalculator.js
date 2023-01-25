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
          <div className="center">
            <img className="side-img" src={sideimg} alt="" />
            <div className="card-main">
              <div className="inside-content ml-7">
                {/* <div className='img'>
                                <img className='icon' src={home} alt="" />
                                <img className='icon' src={car} alt="" />
                                <img className='icon' src={gold} alt="" />
                            </div> */}
                <br />
                <div>
                  <h1>Loan Amount</h1>
                  <input
                    type="number"
                    value={value3}
                    placeholder="Loan Amount"
                  />
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    name="value3"
                    step="1000"
                    onChange={this.DrageChange}
                    id="curser"
                  />
                  <h1 className="border">${value3}</h1>

                  <h1>Loan Term</h1>
                  <input type="number" value={value1} placeholder="Duration" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    name="value1"
                    onChange={this.DrageChange}
                    id="curser"
                  />
                  <h1 className="border">{value1} Months</h1>

                  <h1>Interest Rate</h1>
                  <input
                    type="number"
                    value={value2}
                    placeholder="Interest %"
                  />
                  <input
                    type="range"
                    min="0"
                    max="30"
                    name="value2"
                    step=".5"
                    onChange={this.DrageChange}
                    id="curser"
                  />
                  <h1 className="border">{value2}%</h1>
                </div>
              </div>
              <br />
              <div className="button-output">
                <button
                  className="secondary-btn"
                  onClick={this.Eligbilitysumbit}
                >
                  Calculate
                </button>
              </div>
              <br />
              <h1>Total Amount={output}</h1>
              <Link to="/apply-loan" className="secondary-btn">
                Apply Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoanCalculator;
