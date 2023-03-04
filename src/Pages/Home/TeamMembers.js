import React, { useState } from "react";
import { useGetTeamsQuery } from "../../features/api/apiSlice";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import TeamSection from "./TeamSection";

const TeamMembers = () => {
  const [name, setName] = useState("Team Members & Contributions");
  const { data: teams } = useGetTeamsQuery();
  console.log(teams);
  return (
    <div>
      <DynamicBanner name={name}></DynamicBanner>
      <div className="team-members py-12">
        <div className="container">
          <div className="section-title w-full md:w-[650px] mx-auto text-center">
            <h5 className="text-[#DF0303] text-xl text-md mb-3">
              -- Our Team --
            </h5>
            <h1 className="text-[#010C3A] md:leading-[48px] text-4xl md:text-[40px] font-bold mb-6">
              Team Of Expert Consulted
            </h1>
          </div>
          <div className="member-wrap pt-6 align-content-center justify-items-center grid gap-3  grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 ">
            {teams?.map((team) => (
              <TeamSection key={team._id} team={team} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
