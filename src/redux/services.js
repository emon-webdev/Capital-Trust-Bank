
import { createSlice } from "@reduxjs/toolkit";

let IntialServices = {
   services:[
      {
          "id":"1",
          "details":"Our Education Loan covers the entire cost of your child education to help you send your children for higher education abroad.",
          "title":"Education Loan",
          "img":"https://i.ibb.co/2WYbDt5/edu-loan.jpg",

      },
      {
          "id":"2",
          "details":" A secured loan, where gold jewellery is provided as collateral, is a gold loan. The loan amount that will be provided will depend on the value of the gold.",
          "title":"Gold Loan",
          "img":"https://i.ibb.co/4WB22H1/gold-loan.jpg",
      },
      {
          "id":"3",
          "details":"Term loan facility available to incur own, children and sibling's marriage expenses only. Age Limit: Minimum Age 21 years and maximum 60 years.",
          "title":"Marriage Loan",
          "img":"https://i.ibb.co/R23kLm0/marriage-loan.jpg",
      },
      {
          "id":"4",
          "details":"Own your dream car with Capital Trust Bank car loans. Capital Trust Bank offers uniquely tailored Car Loan product that takes the pain and hassle out of buying a car.",
          "title":"Vehicle Loan",
          "img":"https://i.ibb.co/vVxszGm/vehicle-loan.jpg",

      }
  ]
};


export const servicesSlice = createSlice({
   name: "services",
   initialState: IntialServices,
   reducers: {
    showServices: (state) => state,
   },
 });
 
 export const {showServices} = servicesSlice.actions;
 export default servicesSlice.reducer;