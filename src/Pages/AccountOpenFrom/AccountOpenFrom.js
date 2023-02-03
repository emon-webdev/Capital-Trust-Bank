import {
  Box,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select
} from "@mui/material";
import { default as React, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
const AccountOpenFrom = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const date = new Date();
  console.log(date);
  const imgHostKey = process.env.REACT_APP_IMAGE_SECRET_KEY;
  const [name, setName] = useState("Account Open In Bank");

  /* submit from */
  const accountFromSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const account = {
            accountOpenDate: date,
            firstName: data.firstName,
            lastName: data.lastName,
            birth: data.birth,
            gender: data.gender,
            phone: data.phone,
            email: data.email,
            streetAddress: data.streetAddress,
            city: data.city,
            region: data.region,
            postal: data.postal,
            country: data.country,
            identification: data.identification,
            idNumber: data.idNumber,
            frontCardImg: imgData?.data.url,
            accountType: data.accountType,
            accountCategory: data.accountCategory,
            monthlySalary: data.monthlySalary,
            initialDeposit: data.initialDeposit,
            term: true,
            approve: false,
          };
          // post to database
          fetch(`http://localhost:5000/bankAccounts`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(account),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success("Please wait for manager approval");
                reset();
              }
            })
            .then((error) => console.error(error));
        }
      });
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
            <form
              onSubmit={handleSubmit(accountFromSubmit)}
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
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    type="text"
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
                    {...register("lastName", {
                      required: "Name is required",
                    })}
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
                    {...register("birth", {
                      required: "Name is required",
                    })}
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
                      sx={{ margin: "5px 0 10px", width: "100%" }}
                      {...register("gender", {
                        required: "gender is required",
                      })}
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
                    {...register("phone", {
                      required: "phone is required",
                    })}
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
                    {...register("email", {
                      required: "email is required",
                    })}
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
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
                    {...register("streetAddress", {
                      required: "streetAddress is required",
                    })}
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
                    {...register("city", {
                      required: "city is required",
                    })}
                    fullWidth
                    className="border  px-[10px] rounded "
                    style={{ margin: "5px 0 10px", width: "100%" }}
                    placeholder="City"
                  ></input>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">Region</label>
                  <input
                    {...register("region", {
                      required: "region is required",
                    })}
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
                    {...register("postal", {
                      required: "postal is required",
                    })}
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
                    {...register("country", {
                      required: "country is required",
                    })}
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
                    fullWidth
                    defaultValue="Student ID"
                    className="border  px-[10px] rounded "
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    {...register("identification", {
                      required: "identification is required",
                    })}
                  >
                    <MenuItem value="Student ID">Student ID</MenuItem>
                    <MenuItem value="National ID">National ID</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <label className="text-base text-[#57647E]">ID Number</label>
                  <input
                    name="idNumber"
                    {...register("idNumber", {
                      required: "id Number is required",
                    })}
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
                    type="file"
                    {...register("image", {
                      required: "Id Card is required",
                    })}
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
                    defaultValue="Current"
                    fullWidth
                    className="border  px-[10px] rounded "
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    {...register("accountType", {
                      required: "accountType is required",
                    })}
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
                    {...register("accountCategory", {
                      required: "account Category is required",
                    })}
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
                    {...register("monthlySalary", {
                      required: "monthlySalary is required",
                    })}
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
                    {...register("initialDeposit", {
                      required: "initial Deposit is required",
                    })}
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
                  // onClick={(e) => setTerms(e.target.value)}
                  {...register("term", {
                    required: "term is required",
                  })}
                />
                <label htmlFor="terms">I agree to terms and conditions</label>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <button
                  style={{ width: "49%" }}
                  className="primary-btn mt-2 "
                  type="submit"
                >
                  Submit
                </button>
              </Box>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AccountOpenFrom;
