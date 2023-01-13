import React from 'react';
import education from "../../assets/Services(Home)/edu_loan.jpg";
import gold from "../../assets/Services(Home)/gold-loan.jpg";
import marriage from '../../assets/Services(Home)/marriage_loan.jpg';
import vehicle from "../../assets/Services(Home)/vehicle-loan.jpg";
const Services = () => {
    return (
      <div className="services-area">
        <div className="container">
          <h5 className="text-center text-red-500">Best Services</h5>
          <h1 className="text-center text-3xl font-bold mb-10">
            We provide best services <br /> for your loans
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="education card bg-base-100 shadow-xl">
              <figure>
                <img src={education} alt="education" className="h-40 w-full" />
              </figure>
              <div className="card-body text-center p-3">
                <h2 className="card-title font-bold text-xl">Education Loan</h2>
                <p>
                  Our Education Loan covers the entire cost of your child's
                  education to help you send your children for higher education
                  abroad.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-red-500">
                    Read More +
                  </div>
                </div>
              </div>
            </div>

            <div className="vehicle card bg-base-100 shadow-xl">
              <figure>
                <img src={vehicle} alt="vehicle" className="h-40 w-full" />
              </figure>
              <div className="card-body text-center p-3">
                <h2 className="card-title font-bold text-xl">Vehicle Loan</h2>
                <p>
                  Own your dream car with Capital Trust Bank car loans. Capital
                  Trust Bank offers uniquely tailored Car Loan product that
                  takes the pain and hassle out of buying a car.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-red-500">
                    Read More +
                  </div>
                </div>
              </div>
            </div>

            <div className="gold card bg-base-100 shadow-xl">
              <figure>
                <img src={gold} alt="gold" className="h-40 w-full" />
              </figure>
              <div className="card-body text-center p-3">
                <h2 className="card-title font-bold text-xl">Gold Loan</h2>
                <p>
                  A secured loan, where gold jewellery is provided as
                  collateral, is a gold loan. The loan amount that will be
                  provided will depend on the value of the gold.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-red-500">
                    Read More +
                  </div>
                </div>
              </div>
            </div>

            <div className="marriage card bg-base-100 shadow-xl">
              <figure>
                <img src={marriage} alt="marriage" className="h-40 w-full" />
              </figure>
              <div className="card-body text-center p-3">
                <h2 className="card-title font-bold text-xl">Marriage loan</h2>
                <p>
                  Term loan facility available to incur own, children and
                  sibling's marriage expenses only. Age Limit: Minimum Age 21
                  years and maximum 60 years .
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-red-500">
                    Read More +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;