import {
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Stack
} from "@chakra-ui/react";
import { GoogleAuthProvider } from "@firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../component/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider";
import setLoginToken from "../../hooks/UseToken/LoginToken";
import setAuthToken from "../../hooks/UseToken/UseToken";

const Login = () => {
  const { signInWithEmail, forgetPassword, signInWithGoogle, logOut } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [signInError, setSignInError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogIn = (data) => {
    setSignInError("");
    setLoading(true);
    const email = data.email;
    const password = data.password;

    //store customer device info
    fetch(
      `https://capital-trust-bank-server.vercel.app/storeDeviceInfo/${email}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          signInWithEmail(email, password)
            .then((result) => {
              const user = result.user;
              setLoginToken(user);
              toast.success("Login Success");
              setLoading(false);
              navigate(from, { replace: true });
            })
            .catch((error) => {
              setSignInError(error.message);
              setLoading(false);
            });
        } else {
          toast.success("Device limit over.");
        }
      });
  };
  const handleForgetPassword = () => {
    if (!userEmail) {
      return toast.error("please inter your email");
    }
    forgetPassword(userEmail)
      .then((result) => {
        toast.success("please check your email and reset your password");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  //google sign in
  const handleGoogleSignIn = (Provider) => {
    signInWithGoogle(googleProvider).then((result) => {
      const user = result.user;
      const email = user.email;

      //store customer device info
      fetch(
        `https://capital-trust-bank-server.vercel.app/storeDeviceInfo/${email}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const name = user?.displayName;
            const image = user?.photoURL;
            const verify = false;
            setAuthToken(user, name, image, verify);
            navigate(from, { replace: true });
          } else {
            toast.success("Device limit over.");
            logOut()
              .then(() => {
                navigate("/");
              })
              .catch((error) => {
                toast.error(error.message);
              });
          }
        });
    });
  };
  return (
    <div className="Login-area">
      <div className="container flex h-[500px] flex-row-reverse overflow-hidden bg-white rounded-lg shadow-lg  my-3 p-3">
        <div className="hidden relative bg-cover lg:block lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/7443994/pexels-photo-7443994.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded opacity-[.6] w-full"
            alt=""
          />
          <div className="absolute top-[30%] left-[16%]">
            <h1 className="text-[#010c3a] text-[35px] text-center">
              Welcome to <br /> Capital Trust Bank
            </h1>
            <p className="text-[17px] -ml-[35px] font-semibold text-center text-[#cf173c]">
              Deposit dollars in our bank and To Feel like million dollars
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleLogIn)}
          className="w-full px-6 py-8 md:px-8 lg:w-1/2 h-full"
        >
          <h2 className="text-2xl mb-5 font-semibold text-center text-gray-700 dark:text-white">
            Login
          </h2>

          <Stack spacing={6}>
            <Input
              placeholder="Your Email"
              size="lg"
              {...register("email", { required: "Please Inter Valid Email" })}
              onBlur={(e) => setUserEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}

            <InputGroup size="md">
              <Input
                size="lg"
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  className="chakra-icon-sign"
                  h="1.75rem"
                  size="sm"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <p className="text-red-500">
                {errors.password?.message} Please Enter Your Password
              </p>
            )}
            <label className="label mt-2">
              <Link onClick={handleForgetPassword} className="label-text-alt">
                Forgot password?
              </Link>
            </label>
          </Stack>

          {signInError && <span className="text-red-500">{signInError}</span>}
          <div className="mt-6">
            <button className="w-full secondary-btn px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              {loading ? <Spinner /> : " Sign In"}
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/signup"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>

          <Link
            onClick={handleGoogleSignIn}
            href="#"
            className="flex items-center w-full justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
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

export default Login;
