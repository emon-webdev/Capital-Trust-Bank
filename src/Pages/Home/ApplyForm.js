import { FormControl } from "@chakra-ui/form-control";
import { Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import apply from "../../assets/Services(Home)/apply-form-box-bg.jpg";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle/useTitle";
import { districts } from "../Services/districtData";
export default function ApplyForm() {
  useTitle("ApplyForm")
  const [district, setDistrict] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setDistrict(event.target.value);
  };

  const [loans, setLoans] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/loanService`)
      .then((res) => res.json())
      .then((data) => setLoans(data));
  }, []);

  const ser = useLoaderData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const date = form.date.value;
    const loan = form.loan.value;
    const pack = form.pack.value;

    const applicant = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      loan: loan,
      package: pack,
      date: date,
    };

    fetch(`${process.env.REACT_APP_API_KEY}/applicants`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Application Successfully Done");
          form.reset();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="apply-area w-100 d-flex justify-center my-20">
      <div className="apply-area w-100  my-20">
        <Box
          className="container"
          display={"flex"}
          borderRadius={"10px"}
          alignItems="center"
          justifyContent={"center"}
          width="100%"
          mx={"auto"}
          height={"800px"}
          zIndex="1"
          sx={{
            backgroundImage: `url(${apply})`,
            backgroundRepeat: "no-repeat",
          }}
          maxWidth="1000px"
        >
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#041C51",
              height: "auto",
              width: "500px",
              borderRadius: "10px",
              marginX: "auto",
            }}
            className="py-10 mb-10 px-7 sm:align-content-center sm:justify-items-center"
          >
            <FormControl>
              <input
                name="name"
                className="border px-3 rounded "
                style={{ width: "100%" }}
                placeholder="Your Name"
                defaultValue={user?.displayName}
              ></input>
            </FormControl>
            <FormControl>
              <input
                name="email"
                style={{ width: "100%" }}
                className="border email-field px-4 rounded"
                placeholder="Email"
                defaultValue={user?.email}
                readOnly
              ></input>
            </FormControl>
            <FormControl>
              <input
                name="phone"
                style={{ width: "100%" }}
                className="border  px-3  rounded"
                placeholder="Phone"
              ></input>
            </FormControl>
            <FormControl>
              <Select
                name="loan"
                backgroundColor={"white"}
                style={{ width: "100%" }}
                className="border  px-3 rounded"
                placeholder="Loan"
                required
              >
                <option value="Education Loan">Education Loan</option>
                <option value="Gold Loan">Gold Loan</option>
                <option value="Marriage Loan">Marriage Loan</option>
                <option value="Vehicle Loan">Vehicle Loan</option>
              </Select>
            </FormControl>
            <FormControl marginY={3}>
              <Select
                name="pack"
                marginY={2}
                backgroundColor={"white"}
                placeholder="Select Package"
                required
              >
                <option value="$50000-1 Year">$50,000-1 Year-10%</option>
                <option value="$100000-2 Years">$1,00,000-2 Years-10%</option>
                <option value="$200000-3 Years">$2,00,000-3 Years-10%</option>
                <option value="$300000-4 Years">$3,00,000-4 Years-10%</option>
                <option value="$500000-5 Years">$5,00,000-5 Years-10%</option>
              </Select>
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
          </form>
        </Box>
      </div>
    </div>
  );
}
