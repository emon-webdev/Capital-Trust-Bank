// import { Button, Card, CardBody, Text, VStack } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";

// const Services = () => {
//   const [name, setName] = useState("Services");
//   const loansData = useLoaderData();

//   return (
//     <div className="service-area ">
//       <div className="mb-5">
//         <DynamicBanner name={name}></DynamicBanner>
//       </div>
//       <div className="container  align-center justify-center gap-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//         {loansData.map((loan) => (
//           <Card
//             shadow="lg"
//             key={loan.id}
//             style={{ width: "100%", height: "auto" }}
//             className="hover:bg-[#041C51]  hover:text-[#fff] "
//           >
//             <CardBody className="flex flex-col align-center justify-center hover:text-white">
//               <div className="w-100  text-4xl flex align-center justify-center my-3"></div>
//               <Text
//                 fontWeight={700}
//                 color="#DF0303"
//                 fontSize={24}
//                 textAlign="center"
//               >
//                 {loan.title}
//               </Text>
//               <div className="text-lg text-center my-5">
//                 {loan.details}
//                 <VStack marginY={4}>
//                   <button className=" hover:bg-[#151423] rounded px-4 py-3 bg-[#DF0303] text-[#fff]">
//                     Details
//                   </button>
//                 </VStack>
//               </div>
//             </CardBody>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
