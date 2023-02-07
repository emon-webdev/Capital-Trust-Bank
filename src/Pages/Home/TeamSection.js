import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import "../../App.css";

const TeamSection = ({ team }) => {
  const { image, name, designation, social } = team;

  return (
    <div className="flex flex-col items-center team p-8 transition-colors duration-300 transform rounded-xl bg-[#fdf3f3] group hover:bg-[#df0303]">
      <div className="image-wrapper">
        <img
          className="object-cover w-32  h-32 rounded-full ring-4 ring-gray-300"
          src={image}
          alt=""
        />
      </div>

      <div className="text-center">
        <h1 className="mt-4 text-2xl font-semibold text-[#010c3a] capitalize dark:text-white group-hover:text-white">
          {name}
        </h1>

        <p className=" mb-3 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
          {designation}
        </p>
      </div>

      <div className="flex">
        {social.map((icon) => (
          <>
            <Link
              to={icon.facebook}
              className="mr-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded-full flex items-center justify-center"
            >
              <BsFacebook />
            </Link>
            <Link
              to={icon.linkedin}
              className="w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded-full flex items-center justify-center"
            >
              <BsLinkedin />
            </Link>
            <Link
              to={icon.github}
              className="ml-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded-full flex items-center justify-center"
            >
              <BsGithub />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
