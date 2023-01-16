import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assests/SignUp/signup1.jpg';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import '../../App.css';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
console.log(process.env.REACT_APP_IMAGE_SECRET_KEY)
    let number = phone
    const handleSignUp = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const image = data.image[0];
        // const number = data.number
        const formData = new FormData();
        formData.append('image', image);        
        console.log(email, password, name, number, image, formData)
    }
    return (

        <div className='signup-area'>
            <div className="container flex w-full mx-auto flex-row-reverse overflow-hidden bg-white rounded-lg shadow-lg  my-3 p-3">
                <div className="hidden bg-cover lg:block lg:w-1/2 h-full">
                    <img src={image} className='rounded' alt='' />
                </div>

                <form onSubmit={handleSubmit(handleSignUp)} className="w-full px-6 py-8 md:px-8 lg:w-1/2 h-full">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
                        Creat an Account
                    </h2>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="name"

                            id="LoggingEmailAddress"

                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                    </div>



                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email</label>

                        <input
                            {...register("email", { required: 'please inter valid email' })}
                            type="email"
                            placeholder="email"
                            id="LoggingEmailAddress"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className='mt-4'>
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Phone</label>
                        <PhoneInput
                            country={'us'}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                        //    {...register("number", {required: true})}
                        />
                    </div>

                    <div className="relative mt-4">
                        <label className="block mb-4 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                        <input
                            {...register("password", {
                                minLength: { value: 6, message: 'password must be 6 character' },
                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/, message: 'password should be a-z, A-Z, number and special character' }

                            })}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                        <i
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-[14px] cursor-pointer bottom-[14px]'>{showPassword ? <FaEye /> : <FaEyeSlash />}</i>

                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>

                    <div className="relative mt-4">
                        <label className="block mb-4 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Confirm Password</label>
                        <input
                            {...register("confirm_password", {
                                required: true,
                                validate: (value) => {
                                    if (watch('password') !== value) {
                                        return 'your password did not match'
                                    }
                                }
                            })}
                            type={confirmPassword ? 'text' : 'password'}
                            placeholder="confirm_password"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <i
                            onClick={() => setConfirmPassword(!confirmPassword)}
                            className='absolute right-[14px] cursor-pointer bottom-[14px]'>{confirmPassword ? <FaEye /> : <FaEyeSlash />}</i>
                        {errors.confirm_password && <p className='text-red-500'>{errors.confirm_password?.message}</p>}
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-4 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Photo</label>
                        </div>

                        <input
                            {...register("image", { required: true })}
                            type="file"
                            placeholder="photo"
                            // id="image"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                        {/* <label className='signup-photo'>Upload Image</label> */}
                    </div>

                    <div className="mt-6">
                        <button className="w-full secondary-btn px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign Up
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Link href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign in</Link>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>

                    <Link href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <div className="px-4 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;