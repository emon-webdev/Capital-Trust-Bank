import React from 'react';
import './LoanCalculator.css';
import sideimg from '../../assets/loanCalculator/emi-calculator.jpg';
// import home from '../../assets/loanCalculator/Home.png'
// import car from '../../assets/loanCalculator/Car.png'
// import gold from '../../assets/loanCalculator/Gold.png'

class LoanCalculator extends React.Component {
    constructor() {
        super()
        this.state = {
            value1: 0,
            value2: null,
            value3: null,
            output: null,
        }
    }

    DrageChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

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
        let final = (value3 * r * Math.pow(1 + r, t) / (Math.pow(1 + r, t) - 1))
        let finalOut = final.toFixed(0)

        this.setState({
            output: finalOut,
        })
    }

    render() {
        const { value1, value2, value3, output } = this.state;
        return (
            <>
                <div className="center">
                    <img className='side-img' src={sideimg} alt="" />
                    <div className="card-main">
                        <div className="heading"><h1>EMI Calculator</h1></div><hr /><hr /><br />
                        <div className="inside-content">
                            {/* <div className='icon'>
                                <img src={home} alt="" />
                                <img src={car} alt="" />
                                <img src={gold} alt="" />
                            </div> */}
                            <br />
                            <label>Loan Amount</label><br />
                            <input type="number" value={value3} placeholder="Loan Amount" />
                            <input type="range" min="10000" max="1000000" name="value3" step="1000" onChange={this.DrageChange} id="curser" />
                            <br />
                            <label>${value3}</label>
                            <br />
                            <br />
                            <label>Loan Term</label><br />
                            <input type="number" value={value1} placeholder="Duration" />
                            <input type="range" min="0" max="100" name="value1" onChange={this.DrageChange} id="curser" />
                            <br />
                            <label>{value1} Months</label>
                            <br />
                            <br />
                            <label>Interest Rate</label><br />
                            <input type="number" value={value2} placeholder="Interest %" />
                            <input type="range" min="0" max="30" name="value2" step=".5" onChange={this.DrageChange} id="curser" />
                            <br />
                            <label>{value2}%</label>
                            <br />
                            <br />
                        </div>
                        <div className="button-output">
                            <button onClick={this.Eligbilitysumbit}>Calculate</button>
                            <h1>Total Amount={output}</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default LoanCalculator;