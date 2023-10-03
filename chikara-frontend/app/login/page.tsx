"use client"
import React, { useState } from 'react';
import { UseLoginUser } from '../hooks/useLoginUser';
import { ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const LoginPage: React.FC = () => {
 
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [response, setResponse] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router=useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const responseData = await UseLoginUser(credentials);
      setResponse('Logging in...');
    
      if (responseData.success) {
        setResponse("You have logged in successfully");
      } else {
        setResponse(responseData.message || "Please input correct login details");
        setTimeout(() => {
          setResponse(null);
        }, 3000);
      }
    } catch (error: any) {
      setResponse(error.message);
    }
    router.push("/emissionChart");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full h-screen flex flex-col sm:flex-row">
      <div className="sm:flex w-1/2 relative flex items-center justify-center">
        <div className=" inset-0">
          <Image
            src="/Assets/backgrounds.png"
            alt="Background"
            className="w-full h-full object-cover"
            width={2937} height={3319}
          />
        </div>
      </div>
      <div className="w-full sm:w-1/2 bg-[#F5F5F5] flex flex-col items-center justify-center p-4 sm:p-20 px-4 text-center sm:text-left mr-40">
        <h1 className={`mt-8 ml-8 mr-28 mb-4 sm:mb-8 text-2xl sm:text-4xl font-poppins text-black font-extrabold`}>
          Welcome Back
        </h1>
        <div className="mb-2">
          <label htmlFor="email" className="block text-gray-700 font-medium font-Poppins">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            className="h-14 px-5 rounded-2xl border-2 border-blue-200 bg-white"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium font-Poppins">
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="h-14 px-5 rounded-2xl border-2 border-blue-200 bg-white"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        
        <button onClick={handleSubmit } className="mt-8 bg-[#0C8283] text-white py-2 rounded-lg w-[228px] h-[45px] hover:bg-opacity-60 focus:outline-none focus:bg-opacity-80 text-lg font-Poppins font-normal -ml-12 "  >
           <a href='/emissionChart'> Login</a>
        </button>
      
        {response && (
          <div className="mt-4 text-teal-500 font-Poppins text-lg">{response}</div>
        )}
        <p className={`mt-8 -mr-8 text-gray-400 text-center font-Poppins text-lg -ml-28 label`}>
         {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account? <a href="/signup" className={`text-teal-300 font-bold label`}>Sign Up</a>
        </p>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );

};
export default LoginPage;







