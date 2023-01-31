// import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import business from '../../assets/insurance/Business solution-pana.png';
import { AuthContext } from '../../context/AuthProvider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BusinessForm() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {user} =useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const insurance = form.insurance.value;
    console.log(name, email, phone, date, insurance);

    const applicant = {
      name: name,
      email: email,
      phone: phone,
      insurance: insurance,
      date: date,
    };

    fetch("https://capital-trust-bank-server.vercel.app/insuranceApplicants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
        <img style={{width:'600px',height:'600px'}} className='animate__animated animate__fadeInLeft mx-5' src={business} alt="" />
      </Box>
      <Box sx={{  }}>
      <Box sx={{ }} className='pl-7'>
        <Tabs value={value} textColor='primary' onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Health" {...a11yProps(0)} />
          <Tab label="Business" {...a11yProps(1)} />
          <Tab label="Travel" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel className='animate__animated animate__fadeInUp' value={value} index={0}>
      <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#041C51",
              height: "auto",
              width: "500px",
              borderRadius: "10px",
              marginX:'auto'
            }}
            className="py-10 px-7 sm:align-content-center sm:justify-items-center"
          >
            <Grid container className=" align-content-center justify-items-center">
              <Grid item xs={12}>
                <input
                  name="name"
                  className="border px-3 rounded "
                  style={{ width: "100%" }}
                  placeholder="Your Name" required
                  defaultValue={user?.displayName}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Email" required
                  defaultValue={user?.email}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="phone"
                  style={{ width: "100%" }}
                  className="border  px-3  rounded"
                  placeholder="Phone" required
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="insurance"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  defaultValue='Health Insurance'
                  
                ></input>
              </Grid>
              {/* <Grid item xs={12}>
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
              </Grid> */}
              <Grid item xs={12}>
                <input
                  name="date"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="dd/mm/yy" required
                ></input>
              </Grid>

                <Grid item xs={12}>
                  <button
                    style={{ width: "100%" }}
                    className="primary-btn mt-2 "
                    type="submit"
                  >
                    Apply
                  </button>
                </Grid>
              </Grid>
            </form>
      </TabPanel>
      <TabPanel className='animate__animated animate__fadeInUp' value={value} index={1}>
      <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#041C51",
              height: "auto",
              width: "500px",
              borderRadius: "10px",
              marginX:'auto'
            }}
            className="py-10 px-7 sm:align-content-center sm:justify-items-center"
          >
            <Grid container className=" align-content-center justify-items-center">
              <Grid item xs={12}>
                <input
                  name="name"
                  className="border px-3 rounded "
                  style={{ width: "100%" }}
                  placeholder="Your Name" required
                  defaultValue={user?.displayName}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Email" required
                  defaultValue={user?.email}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="phone"
                  style={{ width: "100%" }}
                  className="border  px-3  rounded"
                  placeholder="Phone" required
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="insurance"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  defaultValue='Business Insurance'
                  
                ></input>
              </Grid>
              {/* <Grid item xs={12}>
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
              </Grid> */}
              <Grid item xs={12}>
                <input
                  name="date"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="dd/mm/yy" required
                ></input>
              </Grid>

                <Grid item xs={12}>
                  <button
                    style={{ width: "100%" }}
                    className="primary-btn mt-2 "
                    type="submit"
                  >
                    Apply
                  </button>
                </Grid>
              </Grid>
            </form>
      </TabPanel>
      <TabPanel className='animate__animated animate__fadeInUp' value={value} index={2}>
      <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#041C51",
              height: "auto",
              width: "500px",
              borderRadius: "10px",
              marginX:'auto'
            }}
            className="py-10 px-7 sm:align-content-center sm:justify-items-center"
          >
            <Grid container className=" align-content-center justify-items-center">
              <Grid item xs={12}>
                <input
                  name="name"
                  className="border px-3 rounded "
                  style={{ width: "100%" }}
                  placeholder="Your Name" required
                  defaultValue={user?.displayName}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Email" required
                  defaultValue={user?.email}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="phone"
                  style={{ width: "100%" }}
                  className="border  px-3  rounded"
                  placeholder="Phone" required
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="insurance"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded fw-semibold"
                  defaultValue='Travel Insurance'
                  
                ></input>
              </Grid>
              {/* <Grid item xs={12}>
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
              </Grid> */}
              <Grid item xs={12}>
                <input
                  name="date"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="dd/mm/yy" required
                ></input>
              </Grid>

                <Grid item xs={12}>
                  <button
                    style={{ width: "100%" }}
                    className="primary-btn mt-2 "
                    type="submit"
                  >
                    Apply
                  </button>
                </Grid>
              </Grid>
            </form>
      </TabPanel>
    </Box>
    </div>
  );
}