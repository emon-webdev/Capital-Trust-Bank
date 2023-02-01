import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select
} from "@mui/material";
import { default as React, useReducer, useState } from "react";
import { initialState, reducer } from "../../../state/openFromReducer";
import DynamicBanner from "../DynamicBanner/DynamicBanner";
const AccountOpenFrom = () => {
  const [name, setName] = useState("Account Open In Bank");

  //   console.log(setName);
  // const initialState = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   streetAddress: "",
  //   city: "",
  //   date: "",
  //   quantity: 0,
  //   age: "",
  //   gender: "",
  //   term: false,
  // };
  // const reducer = (state, action) => {
  //   console.log(action);

  //   switch (action.type) {
  //     case "INPUT":
  //       return {
  //         ...state,
  //         [action.payload.name]: action.payload.value,
  //       };
  //     case "TOGGLE":
  //       return {
  //         ...state,
  //         term: !state.term,
  //       };
  //     default:
  //       return state;
  //   }
  // };

  const [state, dispatch] = useReducer(reducer, initialState);

  /* submit from */
  const accountFromSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <div className="">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
      <div className="account-open-from py-20 bg-[#F3F3FE]">
        <div className="container">
          <Box
            borderRadius={"8px"}
            width="100%"
            mx={"auto"}
            zIndex="1"
            maxWidth="800px"
            className="px-[38px] pb-7"
            style={{
              backgroundColor: "#fff",
            }}
          >
            <h2 className="text-3xl text-[#2c3345] font-bold text-center mb-0 py-[40px] px-[52px]">
              Account Opening Form
            </h2>
            <h2 className="text-xl text-[#2c3345] font-bold mb-2 ">
              Personal Information
            </h2>
            <Box
              onSubmit={accountFromSubmit}
              component="form"
              className="mb-10  sm:align-content-center sm:justify-items-center"
            >
              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{
                    marginRight: { md: "15px" },
                  }}
                  fullWidth
                >
                  <label className="text-base text-[#57647E]">First Name</label>
                  <input
                    name="firstName"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="First Name"
                  ></input>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">Last Name</label>
                  <input
                    name="lastName"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="Last Name"
                  ></input>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{
                    marginRight: { md: "15px" },
                  }}
                  fullWidth
                >
                  <label className="text-base text-[#57647E]">
                    Date of Birth
                  </label>
                  <input
                    name="firstName"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    fullWidth
                    className="border  px-[10px] rounded "
                    placeholder="Date of Birth"
                  ></input>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">Gender</label>
                  <input
                    name="lastName"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="Last Name"
                  ></input>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{
                    marginRight: { md: "15px" },
                  }}
                  fullWidth
                >
                  <label className="text-base text-[#57647E]">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="Phone Number"
                  ></input>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">
                    Email Address
                  </label>
                  <input
                    name="email"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border email-filed px-[10px] rounded mt-[5px]"
                    style={{ margin: "5px 0 10px !important", width: "100%" }}
                    placeholder="Email Address"
                  ></input>
                </FormControl>
              </Box>
              {/*  Mailing Address */}
              <h2 className="text-xl text-[#2c3345] font-bold my-2 ">
                Mailing Address
              </h2>
              <Box>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">
                    Street Address
                  </label>
                  <input
                    name="streetAddress"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    fullWidth
                    className="border  px-[10px] rounded "
                    placeholder="Street Address"
                  ></input>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{
                    marginRight: { md: "15px" },
                  }}
                  fullWidth
                >
                  <label className="text-base text-[#57647E]">City</label>
                  <input
                    name="city"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="City"
                  ></input>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">Region</label>
                  <input
                    name="region"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded mt-[5px]"
                    style={{ margin: "5px 0 10px !important", width: "100%" }}
                    placeholder="Region"
                  ></input>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{
                    marginRight: { md: "15px" },
                  }}
                  fullWidth
                >
                  <label className="text-base text-[#57647E]">
                    Postal / Zip Code
                  </label>
                  <input
                    name="city"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="Postal / Zip Code"
                  ></input>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">Country</label>
                  <input
                    name="country"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded mt-[5px]"
                    style={{ margin: "5px 0 10px !important", width: "100%" }}
                    placeholder="country"
                  ></input>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{
                    marginRight: { md: "15px" },
                    width: "100%",
                  }}
                  fullWidth
                >
                  <label className="text-base text-[#57647E]">
                    Form of Identification
                  </label>
                  <Select
                    style={{ width: "100%", background: "#fff" }}
                    id="demo-simple-select"
                    name="identification"
                    defaultValue="10"
                    fullWidth
                    className="border  px-[10px] rounded "
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    onChange={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  >
                    <MenuItem value={10}>Student ID</MenuItem>
                    <MenuItem value={20}>National ID</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">ID Number</label>
                  <input
                    name="idNumber"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="Id Number"
                  ></input>
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">
                    ID Card Upload
                  </label>
                  <input
                    name="streetAddress"
                    type="file"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    fullWidth
                    className="border  px-[10px] rounded "
                    placeholder="Street Address"
                  ></input>
                </FormControl>
              </Box>
              <h2 className="text-xl text-[#2c3345] font-bold my-2 ">
                Account Information
              </h2>
              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{
                    marginRight: { md: "15px" },
                    width: "100%",
                  }}
                  fullWidth
                >
                  <label className="text-base text-[#57647E]">
                    Account Type
                  </label>
                  <Select
                    style={{ width: "100%", background: "#fff" }}
                    id="demo-simple-select"
                    name="accountType"
                    defaultValue="10"
                    fullWidth
                    className="border  px-[10px] rounded "
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    onChange={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  >
                    <MenuItem value={10}>Current</MenuItem>
                    <MenuItem value={20}>Savings</MenuItem>
                    <MenuItem value={30}>Others</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">
                    Account Category
                  </label>
                  <Select
                    style={{ width: "100%", background: "#fff" }}
                    id="demo-simple-select"
                    name="accountType"
                    defaultValue="10"
                    fullWidth
                    className="border  px-[10px] rounded "
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    onChange={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  >
                    <MenuItem value={10}>Singly</MenuItem>
                    <MenuItem value={20}>Jointly</MenuItem>
                    <MenuItem value={30}>Others</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{
                    marginRight: { md: "15px" },
                  }}
                  fullWidth
                >
                  <label className="text-base text-[#57647E]">
                    Monthly Salary
                  </label>
                  <input
                    name="monthlySalary"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="Monthly Salary"
                  ></input>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">
                    Initial Deposit
                  </label>
                  <input
                    name="initialDeposit"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="Initial Deposit"
                  ></input>
                </FormControl>
              </Box>
              <Grid
                container
                className=" align-content-center justify-items-center"
              >
                <FormControl fullWidth className="flex">
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className="text-white"
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    style={{ display: "flex" }}
                    onClick={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    className="flex items-center flex-row"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
                <div className="flex  w-full max-w-xs">
                  <input
                    className="mr-3"
                    type="checkbox"
                    name="term"
                    id="terms"
                    required
                    onClick={() => dispatch({ type: "TOGGLE" })}
                  />
                  <label for="terms" className="">
                    I agree to terms and conditions
                  </label>
                </div>
                <Grid item xs={12}>
                  <button
                    style={{ width: "100%" }}
                    className="primary-btn mt-2 "
                    type="submit"
                    disabled={!state.term}
                  >
                    Apply
                  </button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AccountOpenFrom;
