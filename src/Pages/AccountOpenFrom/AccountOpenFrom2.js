import {
  Box,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select
} from "@mui/material";
  
  import { default as React, useReducer, useState } from "react";
import { toast } from "react-hot-toast";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
  
  const AccountOpenFrom = () => {
    const [name, setName] = useState("Account Open In Bank");
    const [idCardImage, setIdCardImage] = useState(null);
    console.log(idCardImage);
    const imageHostKey = process.env.REACT_APP_IMAGE_SECRET_KEY;
    console.log(imageHostKey);
    const initialState = {
      firstName: "",
      lastName: "",
      birth: "",
      gender: "",
      phone: "",
      email: "",
      streetAddress: "",
      city: "",
      region: "",
      postal: "",
      country: "",
      identification: "",
      idNumber: "",
      cardImg: "",
      accountType: "",
      accountCategory: "",
      monthlySalary: "",
      initialDeposit: "",
      term: false,
      verify: false,
    };
    const reducer = (state, action) => {
      console.log(action);
  
      switch (action.type) {
        case "INPUT":
          return {
            ...state,
            [action.payload.name]: action.payload.value,
          };
        case "TOGGLE":
          return {
            ...state,
            term: !state.term,
          };
        default:
          return state;
      }
    };
  
    const [state, dispatch] = useReducer(reducer, initialState);
  
    /* submit from */
    const accountFromSubmit = (event) => {
      event.preventDefault();
  
      const cardImage = event.target.cardImg.files[0];
      console.log(cardImage);
      const formData = new FormData();
      formData.append("cardImg", cardImage);
      const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_SECRET_KEY}`;
      console.log(url);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            const imgUrl = imgData?.data.url;
            setIdCardImage(imgUrl);
          }
        });
  
      const Account = {
        ...state,
      };
      console.log("All Accounts", Account);
  
      fetch(`http://localhost:5000/bankAccounts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(Account),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Please wait for manager approval");
            state();
          }
        })
        .then((error) => console.error(error));
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
              <h2 className="text-3xl text-[#2c3345] font-bold text-center mb-0 md:py-[40px] md:px-[52px]">
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
                    alignItems: "center",
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
                      name="birth"
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
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="gender"
                        sx={{ margin: "5px 0 10px", width: "100%" }}
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      >
                        <Box sx={{ display: "flex" }}>
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
  
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                        </Box>
                      </RadioGroup>
                    </FormControl>
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
                      name="postal"
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
                      fullWidth
                      defaultValue="Student ID"
                      className="border  px-[10px] rounded "
                      sx={{ margin: "5px 0 10px", width: "100%" }}
                      onChange={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: { name: e.target.name, value: e.target.value },
                        })
                      }
                    >
                      <MenuItem value="Student ID">Student ID</MenuItem>
                      <MenuItem value="National ID">National ID</MenuItem>
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
                      name="cardImg"
                      type="file"
                      // onChange={(e) =>
                      //   dispatch({
                      //     type: "INPUT",
                      //     payload: { name: e.target.name, value: e.target.value },
                      //   })
                      // }
                      onChange={(e) => setIdCardImage(e.target.cardImg.files[0])}
                      style={{
                        margin: "5px 0 10px",
                        width: "100%",
                      }}
                      fullWidth
                      className="border md:height-[130px] px-[10px] rounded "
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
                      defaultValue="Current"
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
                      <MenuItem value="Current">Current</MenuItem>
                      <MenuItem value="Savings">Savings</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <label className="text-base text-[#57647E]">
                      Account Category
                    </label>
                    <Select
                      style={{ width: "100%", background: "#fff" }}
                      id="demo-simple-select"
                      name="accountCategory"
                      defaultValue="Singly"
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
                      <MenuItem value="Singly">Singly</MenuItem>
                      <MenuItem value="Jointly">Jointly</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  <input
                    className="mr-3"
                    type="checkbox"
                    name="term"
                    id="terms"
                    required
                    onClick={() => dispatch({ type: "TOGGLE" })}
                  />
                  <label htmlFor="terms">I agree to terms and conditions</label>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <button
                    style={{ width: "49%" }}
                    className="primary-btn mt-2 "
                    type="submit"
                    disabled={!state.term}
                  >
                    Submit
                  </button>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    );
  };
  
  export default AccountOpenFrom;
  