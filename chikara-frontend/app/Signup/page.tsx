"use client"
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type FormData = {
  companyName: string;
  licenseNumber: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Errors = {
  companyName?: string;
  licenseNumber?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    licenseNumber: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({});


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    if (formData.companyName.trim() === "") {
      newErrors.companyName = "Company name is required.";
    }
    if (formData.licenseNumber.trim() === "") {
      newErrors.licenseNumber = "License number is required.";
    }
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required.";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required.";
    }
    if (formData.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form data:", formData);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full h-screen flex flex-col sm:flex-row ">
      <div className=" sm:flex w-1/2 relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/Assets/backgrounds.png" alt="harry" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full sm:w-1/2 bg-[#f5f5f5] flex flex-col items-center justify-center p-4 sm:p-20 px-4 text-center sm:text-left mr-40">
        <h1 className="mt-8 -mr-12 mb-4 sm:mb-8 text-2xl sm:text-4xl font-poppins  text-black ">
          <span className="font-extrabold">Welcome to</span>  <span className="text-teal-300 font-Gugi">Ecobasi</span>
        </h1>
        <form className="w-ful  " onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700 font-medium label font-Poppins">
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className=" mt-2 input inputs"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            {errors.companyName && <p className="text-red-500 mt-2">{errors.companyName}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="licenseNumber" className="block text-gray-700 font-medium label  font-Poppins">
              License number
            </label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              className=" mt-2 input inputs"
              placeholder="Enter your license number"
              value={formData.licenseNumber}
              onChange={handleInputChange}
            />
            {errors.licenseNumber && <p className="text-red-500 mt-2">{errors.licenseNumber}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium label font-Poppins">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="mt-2 input inputs"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <p className="text-red-500 mt-2">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium label font-Poppins">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 input inputs"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium label font-Poppins">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="mt-2 input inputs"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 mt-2">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium label font-Poppins">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="mt-2 input inputs"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 mt-2">{errors.confirmPassword}</p>}
          </div>
          <button
            type="submit"
            className="mt-8 bg-[#0C8283] text-white py-2 rounded-full w-[228px] h-[45px] hover:bg-opacity-60 focus:outline-none focus:bg-opacity-80 text-lg font-Poppins font-normal border"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-8 -mr-12 text-gray-400 text-center font-Poppins text-base sm:text-lg -ml-12 label">
          Already have an account? <a href="/Login" className="text-teal-300 font-Poppins font-bold">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
