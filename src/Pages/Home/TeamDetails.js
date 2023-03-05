import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { VscStarFull, VscStarHalf } from "react-icons/vsc";
import { useLoaderData } from "react-router-dom";
import "../../App.css";
import useTitle from "../../hooks/useTitle/useTitle";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";

const TeamDetails = () => {
  useTitle("TeamDetails");
  const teamDetails = useLoaderData();
  const {
    name: name2,
    role,
    number,
    email,
    social,
    image,
    designation,
    details,
    contributions,
  } = teamDetails;

  return (
    <div>
      <DynamicBanner name={name2} />
      <div className="container">
        <div className="flex items-center details py-16">
          <div className="md:basis-2/5 w-full image-box">
            <img src={image} alt={name2} className="rounded-md" />
          </div>

          <div className="md:basis-3/5 w-full ml-[60px] content-box">
            <div className="flex title-icon-box justify-between">
              <div>
                <h1 className="text-[40px] leading-[48px]">{name2}</h1>
                <p className="text-[#010c3a]">{designation}</p>
                <p className="text-[#010c3a text-[14px] mb-1">Role: {role}</p>
              </div>
              <div className="my-4">
                {social.map((icon) => (
                  <div className="flex items-center">
                    <h3 className="mr-3">Follow: </h3>
                    <a
                      href={icon.facebook}
                      target="_blank"
                      className="mr-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
                    >
                      <BsFacebook />
                    </a>
                    <a
                      href={icon.linkedin}
                      target="_blank"
                      className="w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
                    >
                      <BsLinkedin />
                    </a>
                    <a
                      href={icon.github}
                      target="_blank"
                      className="ml-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
                    >
                      <BsGithub />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <hr />

            <div className="py-[15px]">
              <h4>
                <strong>Project Contributions </strong>
              </h4>
              <p>{contributions}</p>
            </div>

            <div className="pb-[35px] pt-3">
              <h4>
                <strong>Biography</strong>
              </h4>
              <p>{details}</p>
            </div>
            <hr />

            <div className="flex items-center justify-between py-[20px]">
              <div>
                <h4>Reviews:</h4>
                <div className="flex text-yellow-400">
                  <spn>
                    <VscStarFull />
                  </spn>
                  <spn>
                    <VscStarFull />
                  </spn>
                  <spn>
                    <VscStarFull />
                  </spn>
                  <spn>
                    <VscStarFull />
                  </spn>
                  <spn>
                    <VscStarHalf />
                  </spn>
                </div>
              </div>

              <div>
                <h4>Email Address:</h4>
                <span>{email}</span>
              </div>

              <div>
                <h4>Phone Number:</h4>
                <span>{number}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
