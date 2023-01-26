// import * as React from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import travel from '../../assets/insurance/Trip-pana.png'

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

export default function TravelForm() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container flex md:flex-row flex-col w-100  align-center justify-center">
      <Box>
        <img style={{width:'600px',height:'600px'}} className='animate__animated animate__fadeInLeft mx-5' src={travel} alt="" />
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
            // onSubmit={handleSubmit}
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
                  placeholder="Your Name"
                  // defaultValue={user?.displayName}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Email"
                  // defaultValue={user?.email}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="phone"
                  style={{ width: "100%" }}
                  className="border  px-3  rounded"
                  placeholder="Phone"
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
                  placeholder="dd/mm/yy"
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
            // onSubmit={handleSubmit}
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
                  placeholder="Your Name"
                  // defaultValue={user?.displayName}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Email"
                  // defaultValue={user?.email}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="phone"
                  style={{ width: "100%" }}
                  className="border  px-3  rounded"
                  placeholder="Phone"
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
                  placeholder="dd/mm/yy"
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
            // onSubmit={handleSubmit}
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
                  placeholder="Your Name"
                  // defaultValue={user?.displayName}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Email"
                  // defaultValue={user?.email}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="phone"
                  style={{ width: "100%" }}
                  className="border  px-3  rounded"
                  placeholder="Phone"
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
                  placeholder="dd/mm/yy"
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
