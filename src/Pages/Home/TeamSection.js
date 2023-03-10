import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../App.css";

const TeamSection = ({ team }) => {
  const { image, name, role, designation, social, _id } = team;
  console.log(team);
  return (
    <Link
      to={`/team-details/${_id}`}
      className="w-full flex flex-col items-center team p-8 transition-colors duration-300 transform rounded-md bg-[#fdf3f3] group hover:bg-[#df0303]"
    >
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

        <p className=" mb-1 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
          {designation}
        </p>
        <p className=" mb-3 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
          Role: {role}
        </p>
      </div>

      <div className="">
        {social.map((icon, index) => (
          <div key={index} className="flex items-center">
            <a
              href={icon.facebook}
              target="_blank"
              className="mr-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
            >
              <BsFacebook />
            </a>
            <a
              href={icon.linkedin}
              className="w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
              target="_blank"
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
    </Link>
  );
};

export default TeamSection;
