import { FormControl } from "@chakra-ui/form-control";
import { Box, Grid } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import travel from "../../assets/insurance/Trip-pana.png";
import { AuthContext } from "../../context/AuthProvider";
import { districts } from "../Services/districtData";

export default function TravelForm() {
  const [startDate, setStartDate] = useState(new Date());

  const [district, setDistrict] = useState();
  const handleChange = (event) => {
    setDistrict(event.target.value);
  };

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const city = form.city.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const insurance = form.insurance.value;

    const applicant = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      insurance: insurance,
      date: date,
    };

    fetch(
      "https://capital-trust-bank-server-ten.vercel.app/insuranceApplicants",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(applicant),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Application Successlly Done");
          form.reset();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="container flex md:flex-row flex-col w-100  align-center justify-center">
      <Box>
        <img
          style={{ width: "600px", height: "600px" }}
          className="animate__animated animate__slideInLeft mx-5"
          src={travel}
          alt=""
        />
      </Box>
      <Box>
        <Tabs>
          <TabList>
            <Tab>Health</Tab>
            <Tab>Business</Tab>
            <Tab>Travel</Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="animate__animated animate__slideInUp">
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#041C51",
                  height: "auto",
                  width: "500px",
                  borderRadius: "10px",
                  marginX: "auto",
                }}
                className="py-10 px-7 sm:align-content-center sm:justify-items-center"
              >
                <FormControl>
                  <input
                    name="name"
                    className="border px-3 rounded "
                    style={{ width: "100%" }}
                    placeholder="Your Name"
                    required
                    defaultValue={user?.displayName}
                  ></input>
                </FormControl>
                <FormControl>
                  <input
                    name="email"
                    style={{ width: "100%" }}
                    className="border  px-3 rounded"
                    placeholder="Email"
                    required
                    defaultValue={user?.email}
                  ></input>
                </FormControl>
                <FormControl>
                  <input
                    name="phone"
                    style={{ width: "100%" }}
                    className="border  px-3  rounded"
                    placeholder="Phone"
                    required
                  ></input>
                </FormControl>
                <FormControl>
                  <input
                    name="insurance"
                    style={{ width: "100%" }}
                    className="border  px-3 rounded"
                    defaultValue="Health Insurance"
                  ></input>
                </FormControl>
                <FormControl>
                  <select
                    name="city"
                    style={{ width: "100%" }}
                    value={district}
                    onChange={handleChange}
                    label="city"
                    className="border  px-3 rounded"
                    placeholder="City"
                  >
                    {districts.map((dis) => (
                      <option key={dis} value={dis}>
                        {dis}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormControl>
                  <input
                    name="date"
                    type="date"
                    style={{ width: "100%" }}
                    className="border  px-3 rounded"
                    placeholder="dd/mm/yy"
                    required
                  />
                </FormControl>
                <FormControl>
                  <button
                    style={{ width: "100%" }}
                    className="primary-btn mt-2  "
                    type="submit"
                  >
                    Apply
                  </button>
                </FormControl>
              </form>
            </TabPanel>
            <TabPanel className="animate__animated animate__slideInUp">
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#041C51",
                  height: "auto",
                  width: "500px",
                  borderRadius: "10px",
                  marginX: "auto",
                }}
                className="py-10 px-7 sm:align-content-center sm:justify-items-center"
              >
                <Grid
                  container
                  className=" align-content-center justify-items-center"
                >
                  <FormControl>
                    <input
                      name="name"
                      className="border px-3 rounded "
                      style={{ width: "100%" }}
                      placeholder="Your Name"
                      required
                      defaultValue={user?.displayName}
                    ></input>
                  </FormControl>
                  <FormControl>
                    <input
                      name="email"
                      style={{ width: "100%" }}
                      className="border  px-3 rounded"
                      placeholder="Email"
                      required
                      defaultValue={user?.email}
                    ></input>
                  </FormControl>
                  <FormControl>
                    <input
                      name="phone"
                      style={{ width: "100%" }}
                      className="border  px-3  rounded"
                      placeholder="Phone"
                      required
                    ></input>
                  </FormControl>
                  <FormControl>
                    <input
                      name="insurance"
                      style={{ width: "100%" }}
                      className="border  px-3 rounded"
                      defaultValue="Business Insurance"
                    ></input>
                  </FormControl>
                  <FormControl>
                    <select
                      name="city"
                      style={{ width: "100%" }}
                      value={district}
                      onChange={handleChange}
                      label="city"
                      className="border  px-3 rounded"
                      placeholder="City"
                    >
                      {districts.map((dis) => (
                        <option key={dis} value={dis}>
                          {dis}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormControl>
                    <input
                      name="date"
                      type="date"
                      style={{ width: "100%" }}
                      className="border  px-3 rounded"
                      placeholder="dd/mm/yy"
                      required
                    ></input>
                  </FormControl>

                  <FormControl>
                    <button
                      style={{ width: "100%" }}
                      className="primary-btn mt-2 "
                      type="submit"
                    >
                      Apply
                    </button>
                  </FormControl>
                </Grid>
              </form>
            </TabPanel>
            <TabPanel className="animate__animated animate__slideInUp">
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#041C51",
                  height: "auto",
                  width: "500px",
                  borderRadius: "10px",
                  marginX: "auto",
                }}
                className="py-10 px-7 sm:align-content-center sm:justify-items-center"
              >
                <Grid
                  container
                  className=" align-content-center justify-items-center"
                >
                  <FormControl>
                    <input
                      name="name"
                      className="border px-3 rounded "
                      style={{ width: "100%" }}
                      placeholder="Your Name"
                      required
                      defaultValue={user?.displayName}
                    ></input>
                  </FormControl>
                  <FormControl>
                    <input
                      name="email"
                      style={{ width: "100%" }}
                      className="border  px-3 rounded"
                      placeholder="Email"
                      required
                      defaultValue={user?.email}
                    ></input>
                  </FormControl>
                  <FormControl>
                    <input
                      name="phone"
                      style={{ width: "100%" }}
                      className="border  px-3  rounded"
                      placeholder="Phone"
                      required
                    ></input>
                  </FormControl>
                  <FormControl>
                    <input
                      name="insurance"
                      style={{ width: "100%" }}
                      className="border  px-3 rounded"
                      defaultValue="Travel Insurance"
                    ></input>
                  </FormControl>
                  <FormControl>
                    <select
                      name="city"
                      style={{ width: "100%" }}
                      value={district}
                      onChange={handleChange}
                      label="city"
                      className="border  px-3 rounded"
                      placeholder="City"
                    >
                      {districts.map((dis) => (
                        <option key={dis} value={dis}>
                          {dis}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormControl>
                    <input
                      name="date"
                      type="date"
                      style={{ width: "100%" }}
                      className="border  px-3 rounded"
                      placeholder="dd/mm/yy"
                      required
                    ></input>
                  </FormControl>

                  <FormControl>
                    <button
                      style={{ width: "100%" }}
                      className="primary-btn mt-2 "
                      type="submit"
                    >
                      Apply
                    </button>
                  </FormControl>
                </Grid>
              </form>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}
