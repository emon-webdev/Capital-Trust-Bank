import { GoogleAuthProvider } from "@firebase/auth";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../App.css";
import image from "../../assests/SignUp/signup1.jpg";
import Spinner from "../../component/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider";
import setAuthToken from "../../hooks/UseToken/UseToken";

const Signup = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const { createUser, signInWithGoogle, updateUser, verify } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [userImage, setUserImage] = useState(null);
  
  //checking validate
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState('');
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickConfirmShowPassword = () => setConfirmShowPassword((show) => !show);
  let number = phone;

  const handlePassword = (value) => {
    setIsShowPassword(value)
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{6,})')

    if (lower.test(value)) {
      setLowerValidated(true);
    }
    else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    }
    else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    }
    else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    }
    else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    }
    else {
      setLengthValidated(false);
    }
    // setIsShowPassword('')
  }


  const handleSignUp = (data) => {
    setSignUpError("");
    setLoading(true);
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_SECRET_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // console.log(data.data.url)
          createUser(email, password)
            .then((result) => {
              const user = result.user;
              const image = data.data.url;
              setAuthToken(user, name, image, number);
              updateUser(name, data.data.url)
                .then(() => {
                  console.log(user);
                  setLoading(false);
                  toast.success("SignUp Success");
                  navigate("/login");
                  verifyEmail();
                })
                .catch((error) => {
                  console.log(error);
                  setSignUpError(error.message);
                  setLoading(false);
                });
            })
            .catch((error) => {
              console.log(error);
              setSignUpError(error.message);
              setLoading(false);
            });
        }
      });
  };

  //google sign in
  const handleGoogleSignIn = (Provider) => {
    signInWithGoogle(googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
      const name = user?.displayName;
      const image = user?.photoURL;
      const verify = false;
      setAuthToken(user, name, image, verify);
      navigate(from, { replace: true });
      console.log(verify)
    });
  };

  const verifyEmail = () => {
    verify().then((result) => {
      toast.success("please check your email and verify your account");
    });
  };
  return (
    <div className="signup-area">
      <div className="container flex w-full mx-auto flex-row-reverse overflow-hidden bg-white rounded-lg shadow-lg  my-3 p-3">
        <div className="hidden bg-cover lg:block lg:w-1/2 h-full">
          <img src={image} className="rounded" alt="" />
        </div>

        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="w-full px-6 py-8 md:px-8 lg:w-1/2 h-full"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            Create an Account
          </h2>

          <div className="mt-4">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              {...register("name", { required: true })}
              className="w-full"
            />
            {errors.name && (
              <p className="text-red-500">
                {errors.name?.message} Please Insert Your Name
              </p>
            )}
          </div>

          <div className="mt-4">
            <TextField
              sx={{
                "&. Mui-focused": {
                  borderColor: "red",
                },
              }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              {...register("email", { required: "Please Inter Valid Email" })}
              className="w-full"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>

          <div className="mt-4">
            <PhoneInput
              id="outlined-basic"
              label="Number"
              variant="outlined"
              // required
              className="w-full"
              country={"us"}
              value={phone}
              {...register("phone", { required: 'Please Inter Your Phone Number' })}
              onChange={(phone) => setPhone(phone)}
            />
             {errors.phone && (
              <p className="text-red-500">
                {errors.phone?.message} 
              </p>
            )}
          </div>

          {/* password input  */}
          <div className="relative mt-4">
            <FormControl
              sx={{ m: 1, width: "100%", marginLeft: "-1px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput

                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "password must be 6 character",
                  },
                  pattern: {
                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
                    message:
                      "password should be a-z, A-Z, number and special character",
                  },
                })}
                onChange={(e) => handlePassword(e.target.value)}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {
              isShowPassword &&             
             
              <p className=''>                
              <span>Password Should be At Least One </span> <span></span>
                <></>
              <span className={lowerValidated ? 'text-green-500' : 'text-red-500'}>Lowercase,</span> <></>
              <span className={upperValidated ? 'text-green-500' : 'text-red-500'}>Uppercase,</span> <></>
              <span className={numberValidated ? 'text-green-500' : 'text-red-500'}>Number,</span> <></>
              <span className={specialValidated ? 'text-green-500' : 'text-red-500'}>Special Character,</span> <></>
              <span className={lengthValidated ? 'text-green-500' : 'text-red-500'}>6 Character,</span> <></>
            </p>
             
            }
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>



          {/* confirm_password input */}
          <div className="relative mt-4">
            <FormControl
              sx={{ m: 1, width: "100%", marginLeft: "-1px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-password-input"
                label="Confirm-Password"
                autoComplete="current-password"
                {...register("confirm_password", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return "your password did not match";
                    }
                  },
                })}
                // id="outlined-start-adornment"
                type={confirmShowPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickConfirmShowPassword}
                      edge="end"
                    >
                      {confirmShowPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {errors.confirm_password && (
              <p className="text-red-500">{errors.confirm_password?.message}</p>
            )}
          </div>

          <div className="my-6">

            <input
              {...register("image", { required: true })}
              type="file"
              placeholder="photo"
              id="file"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              onChange={(e) => setUserImage(e.target.files[0])}
            />
            <label className="signup-photo" htmlFor="file">
              Upload Image
            </label>
            
            {userImage ? <span className="ml-3">{userImage.name}</span> : <span className="ml-3">Choose Image Before Pressing the Sign Up Button</span>}
          </div>
          {signUpError && <span className="text-red-500">{signUpError}</span>}
          <div className="mt-7">
            <button className="w-full secondary-btn px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              {loading ? <Spinner /> : " Sign Up"}
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>

          <Link
            onClick={handleGoogleSignIn}
            href="#"
            className="flex items-center justify-center mt-4 w-full text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
