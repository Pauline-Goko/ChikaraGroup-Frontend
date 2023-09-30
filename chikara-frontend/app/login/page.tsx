"use client"
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import 'tailwindcss/tailwind.css';
import Image from "next/image";

type FormData = {
  email: string;
  password: string;
};

type Errors = {
  email?: string;
  password?: string;
};

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: undefined,
    });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
  };

  const isValidEmail = (email: string) => {
    return email.includes("@");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen" style={{ marginLeft: '1px'}}>
      <div className="sm:flex w-1/2 relative flex items-center justify-center">
        <div className="absolute inset-0">
          {/* <img src="/Assets/backgrounds.png" alt="harry" className="w-full h-full object-cover" /> */}
          <Image 
          src="/Assets/backgrounds.png"
          alt="background"
          width={1000}
          height={200}
          className="w-full h-full object-cover"
          />

        </div>
      </div>

      <div className={`w-full sm:w-1/2 bg-[#f5f5f5] flex flex-col items-center justify-center p-4 sm:p-20 px-4 text-center sm:text-left -mt-60 mr-40`}>
        <h1 className={`mt-8 mr-28 mb-4 sm:mb-8 text-2xl sm:text-4xl font-poppins text-black font-extrabold`}>
          Welcome Back
        </h1>
        <p className="mb-8 text-gray-400 -ml-14">Enter your email and password to sign in</p>
        <form className="" onSubmit={handleSubmit}>
          <div className={`mb-4`}>
            <label htmlFor="email" className={`block text-black font-normal label`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-2 w-[350px] h-[50px] px-4 rounded-lg border-2 border-[#BCE2E3] bg-white labels`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className={`text-red-500 mt-2`}>{errors.email}</p>}
          </div>
          <div className={`mb-4`}>
            <label htmlFor="password" className={`block text-black font-normal label`}>
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={`mt-2 w-[350px] h-[50px] px-4 rounded-lg border-2 border-[#BCE2E3] bg-white labels`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2"
                onClick={togglePasswordVisibility}
              >
                 {showPassword ? <FaEye />   : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && <p className={`text-red-500 mt-2`}>{errors.password}</p>}
          </div>
          <button
          
  type="submit"
  className="mt-8 bg-[#0C8283] text-white py-2 rounded-lg w-[228px] h-[45px] hover:bg-opacity-60 focus:outline-none focus:bg-opacity-80 text-lg font-Poppins font-normal "
>
  <a href="/LimitChart"> Sign in</a>
  

</button>
        </form>
        <p className={`mt-8 -mr-8 text-gray-400 text-center font-Poppins text-lg -ml-28 label`}>
          Do not have an account? <a href="/signup" className={`text-teal-300 font-bold label`}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login
