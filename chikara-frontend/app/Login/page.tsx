"use client"
import React, { useState } from "react";


type FormData = {
  companyName: string;
  licenseNumber: string;
  phone: string;
  email: string;
  password: string;
};

type Errors = {
  companyName?: string;
  licenseNumber?: string;
  phone?: string;
  email?: string;
  password?: string;
};

const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabled: "#D9D9D9",
};

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    licenseNumber: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

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

  return (
    <div className="w-full h-screen flex flex-col sm:flex-row">
      <div className="hidden sm:flex w-1/2 relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/Assets/backgrounds.png" alt="harry" className="w-full h-full object-cover" />

        </div>
      </div>

      <div className="w-full sm:w-1/2 bg-[#f5f5f5] flex flex-col items-center justify-center p-4 sm:p-20 px-4 text-center sm:text-left">
        <h1 className="mt-8 mb-4 sm:mb-8 text-2xl sm:text-4xl font-Laila text-black -ml-20">
          Welcome <span className="text-[#0C8283] font-Gugi ">Back </span>
        </h1>
        <form className="w-ful">
         
        
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium text-2xl font-Poppins">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-[#BCE2E3] rounded focus:outline-none focus:border-primary text-gray-400 font-Poppins text-xl font-normal"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium text-2xl font-normal font-Poppins">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border border-[#BCE2E3] rounded focus:outline-none focus:border-primary text-gray-400 font-Poppins text-xl font-normal"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p className="text-red-500 mt-2">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#0C8283] text-[#F2E5E5] py-2 rounded-full w-[231px] h-[45px] hover:bg-opacity-80 focus:outline-none focus:bg-opacity-80 text-lg font-Poppins font-normal"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-gray-400 text-center font-Poppins text-lg">
          Don't have an account? <a href="/Signup" className="text-teal-300 font-bold">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
