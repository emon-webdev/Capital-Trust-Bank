import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
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
      <div className="account-open-from py-16 bg-[#F3F3FE]">
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
            <form
              onSubmit={accountFromSubmit}
              className="mb-10  sm:align-content-center sm:justify-items-center"
            >
              <Grid
                container
                className=" align-content-center justify-items-center"
              >
                <Grid item xs={12}>
                  <input
                    name="firstName"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border px-3 rounded "
                    style={{ width: "100%" }}
                    placeholder="First Name"
                  ></input>
                </Grid>
                <Grid fullWidth item xs={12}>
                  <input
                    name="lastName"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    className="border px-3 rounded "
                    style={{ width: "100%" }}
                    placeholder="Last Name"
                  ></input>
                </Grid>
                <Grid item xs={12}>
                  <input
                    name="email"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    fullWidth
                    style={{ width: "100%" }}
                    className="border w-full  px-3 rounded"
                    placeholder="Email"
                  ></input>
                </Grid>
                <Grid item xs={12}>
                  <input
                    name="phone"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    style={{ width: "100%" }}
                    className="border  px-3  rounded"
                    placeholder="Phone"
                  ></input>
                </Grid>
                <Grid item xs={12}>
                  <input
                    name="streetAddress"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    style={{ width: "100%" }}
                    className="border  px-3 rounded"
                    placeholder="Street Address"
                  ></input>
                </Grid>
                <Grid item xs={12}>
                  <input
                    name="city"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    style={{ width: "100%" }}
                    className="border  px-3 rounded"
                    placeholder="City"
                  ></input>
                </Grid>
                <Grid item xs={12}>
                  <input
                    name="date"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    style={{ width: "100%" }}
                    className="border  px-3 rounded"
                    placeholder="dd/mm/yy"
                  ></input>
                </Grid>

                <FormControl fullWidth style={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    style={{ width: "100%", background: "#fff" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="age"
                    // value={age}
                    defaultValue="20"
                    label="Age"
                    fullWidth
                    className="border px-3 rounded "
                    onChange={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Grid item xs={12} className="flex items-center">
                  <button className="sm-btn">-</button>
                  <span className="text-3xl text-white px-4">0</span>
                  <button className="sm-btn">+</button>
                </Grid>
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
                    className="flex items-center flex-row text-white"
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
                  <label for="terms" className="text-white">
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
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AccountOpenFrom;
