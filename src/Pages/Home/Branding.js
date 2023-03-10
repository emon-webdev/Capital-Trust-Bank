import { Box } from "@chakra-ui/react";
import React from "react";
import shape1 from '../../assets/Brands/shape-1.png';
import anydesk from '../../assets/Brands/Anedesk.png';
import alphabet from '../../assets/Brands/Alphabet.png';
import ryzen from '../../assets/Brands/RYZEN.png';
import microsoft from '../../assets/Brands/Microsoft.png';
import shape2 from '../../assets/Brands/shape-2.png';
const Branding = () => {
  return (
    <div
      className="hidden mt-[50px] lg:block"
      // sx={{ background: "#010C3A", padding: "5px 0", marginTop: "50px" }}
    >
      <Box className="branding-area bg-[#010c3a] flex justify-between items-center">
        <figure>
          <img className="w-[54px]" src={shape1} alt="" />
        </figure>
        <Box className="container mx-auto  md:flex justify-between items-center">
          <figure>
            <img
              className="md:w-[150px] md:mb-3 mx-auto"
              src={anydesk}
              alt=""
            />
          </figure>
          <figure>
            <img className="md:w-[150px] mx-auto" src={alphabet} alt="" />
          </figure>
          <figure>
            <img className="md:w-[150px] mx-auto" src={ryzen} alt="" />
          </figure>
          <figure>
            <img className="md:w-[150px] mx-auto" src={microsoft} alt="" />
          </figure>
        </Box>
        <figure>
          <img className="w-[54px]" src={shape2} alt="" />
        </figure>
      </Box>
    </div>
  );
};

export default Branding;
