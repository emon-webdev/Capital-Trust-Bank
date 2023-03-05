import React, { useState } from "react";
import { Link } from "react-router-dom";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";

const ProjectDocs = () => {
  const [name, setName] = useState("Project Documentation");
  return (
    <div>
      <DynamicBanner name={name} />
      <div className="project-docs py-12 bg-[#F3F3FE]">
        <div className="container">
          {/* <div className="section-title w-full md:w-[650px] mx-auto text-center">
            <h5 className="text-[#DF0303] text-xl text-md mb-3">
              -- Project Documentation --
            </h5>
            <h1 className="text-[#010C3A] md:leading-[48px] text-4xl md:text-[40px] font-bold mb-6">
              Project Documentation
            </h1>
          </div> */}
          <div>
            <div className="mx-auto px-[38px] py-[50px] z-10 w-full max-w-[900px] rounded-lg  bg-white">
              <h2 class="text-[26px] font-semibold md:text-[32px] text-[#2c3345] text-center mb-0 pb-[40px] ">
                Project Documentation
              </h2>
              <div>
                <div>
                  <h2 className="font-semibold mb-1">
                    Project Title :{" "}
                    <span className="font-medium">Capital Trust Bank</span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    Project Type :{" "}
                    <span className="font-medium">Banking Transaction</span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    Sector : <span className="font-medium">Banking</span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    Team Name :
                    <span className="font-medium">
                      WDevC6 (web developers committee number 6)
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    Team-Code : <span className="font-medium">602.4</span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    Members :{" "}
                    <span className="font-medium">
                      Niloy Modak, Emon Hossain, Salma Tabassum Mouri, Mohd.
                      Wahidul Alam, MD Rakib Khan,Akash Chakrabortty{" "}
                    </span>
                  </h2>
                </div>
                <div className="my-5">
                  <Link to="/team" class="sm-btn mr-2">
                    Our Team
                  </Link>
                  <a
                    href="https://github.com/emon-webdev/Capital-Trust-Bank"
                    class="sm-btn mr-2"
                  >
                    Client Site Code
                  </a>
                  <a
                    href="https://github.com/emon-webdev/Capital-Trust-Bank-Server"
                    class="sm-btn "
                  >
                    Server Site Code
                  </a>
                </div>
                <div>
                  <h2 className="font-semibold my-3">
                    Technology:{" "}
                    <span className="font-medium ">
                      We used following technologies in our project-
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    1.Loan:{" "}
                    <span className="font-medium">
                      User can find various loans in our bank such as education
                      loan, marriage loan etc.
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    2.Insurance:{" "}
                    <span className="font-medium">
                      Users can apply for various insurance in our bank by
                      submitting a form.
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    3.Open an Account:{" "}
                    <span className="font-medium">
                      To be an account holder of our bank user must fill the
                      open account form.After approved by admin, user can see
                      his dashboard.
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    4. Apply for card:{" "}
                    <span className="font-medium">
                      Account holder can apply for his credit card by using
                      these features.
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    5.EMI calculator:{" "}
                    <span className="font-medium">
                      User can calculate his loan and percentage by using this
                      calculator.
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    6.Pay Bills:{" "}
                    <span className="font-medium">
                      User can pay his electricity, gas etc bills by using this
                      section.Payment will be made by using SSL commerce.
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    7.Donate:{" "}
                    <span className="font-medium">
                      Users can donate for any purpose by this feature.Here
                      using SSL commerce users can donate as they want.
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    8.Device Activity:{" "}
                    <span className="font-medium">
                      Users can only log in our bank only from two browsers
                      otherwise they cannot.If a user tries to log in from three
                      browsers , he can see a device limit toast.
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    9.Customer Service:{" "}
                    <span className="font-medium">
                      Users can message admin for instant help by using this
                      feature.
                    </span>
                  </h2>
                  <h2 className="font-semibold mb-1">
                    10.Exchange Rate:{" "}
                    <span className="font-medium">
                      Users can exchange 5 foreign currency by using this
                      feature.
                    </span>
                  </h2>
                </div>
                <div>
                  <h2 className="font-semibold text-[24px] mb-1">Structure:</h2>
                  <p>
                    Implementing Agile methodology in a bank requires a
                    particular structure that accommodates the unique needs and
                    requirements of the financial industry. Here are some key
                    components of an Agile bank structure:
                  </p>
                  <br />
                  <p>
                    Cross-Functional Teams: Agile bank projects require teams
                    with diverse skill sets that can work together towards a
                    common goal. In a bank, this could mean having IT
                    professionals, bankers, and risk managers working on the
                    same project team.
                  </p>
                  <br />
                  <p>
                    Agile Iterations: Agile bank projects are broken down into
                    smaller iterations, typically two to four weeks in duration.
                    Each iteration should be focused on delivering a working
                    product or feature that can be tested, reviewed, and
                    evaluated.
                  </p>
                  <br />
                  <p>
                    Agile Backlog: The Agile backlog should include a
                    prioritized list of project features or requirements. In a
                    bank, the backlog should include requirements related to
                    compliance, security, and regulatory requirements, as well
                    as customer needs and business goals.
                  </p>
                  <br />
                  <p>
                    Agile Product Owner: The Agile product owner is responsible
                    for defining the project's goals and objectives,
                    prioritizing the backlog, and making decisions about what to
                    deliver in each iteration. In a bank, the product owner
                    should have a strong understanding of the financial industry
                    and be able to balance the needs of the business with the
                    needs of customers and regulators.
                  </p>
                  <br />
                  <p>
                    Agile Scrum Master: The Agile Scrum Master is responsible
                    for facilitating the Agile process and ensuring that the
                    team is following the Agile framework. In a bank, the Scrum
                    Master should be familiar with the unique challenges and
                    requirements of the financial industry and be able to
                    provide guidance to the team on how to navigate these
                    challenges.
                  </p>
                  <br />
                  <p>
                    Agile Artifacts: Agile bank projects use various artifacts,
                    such as user stories, acceptance criteria, and burn-down
                    charts, to track progress, identify project risks, and
                    communicate with stakeholders. In a bank, additional
                    artifacts may be necessary to address compliance, security,
                    and regulatory requirements.
                  </p>
                  <br />
                  <p>
                    By adopting an Agile bank structure, banks can improve their
                    project management process, reduce time-to-market, and
                    increase customer satisfaction. The Agile approach allows
                    banks to be more responsive to changes in the financial
                    industry and deliver products and services that meet the
                    evolving needs of customers and regulators.
                  </p>
                </div>
              </div>

              <div className="text-center mt-5">
                <a
                  href="https://capital-trust-bank-ee791.web.app/"
                  class="sm-btn mr-2"
                >
                  Live Website
                </a>
                <a
                  href="https://github.com/emon-webdev/Capital-Trust-Bank"
                  class="sm-btn mr-2"
                >
                  Client Site Code
                </a>
                <a
                  href="https://github.com/emon-webdev/Capital-Trust-Bank-Server"
                  class="sm-btn "
                >
                  Server Site Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDocs;
