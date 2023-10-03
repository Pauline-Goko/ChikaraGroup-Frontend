"use client"
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { UseCreateUser } from '../hooks/useCreateUser';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const SignUp: React.FC = () => {
  const [user, setUser] = useState({
    description: '',
    company_id: '',
    username: '',
    location: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
  });
  const [response, setResponse] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const isAnyFieldEmpty = Object.values(user).some((value) => value === '');
    if (isAnyFieldEmpty) {
      setResponse('Please fill out all fields.');
      return;
    }
    try {
      setResponse('Registration successful...');
      await new Promise((resolve) => setTimeout(resolve,2000));
      const result = await UseCreateUser(user);
      if (result.success) {
        setResponse('Signup successful');
      } else if (result.message){{
        setResponse(result.message)
      }
        setResponse('Please input correct details');
      }
    } catch (error:any) {
      console.error('Error:', error);
      setResponse('Error occurred. Please check the console for details.');
    }
    router.push('/login');
  };
  const togglePasswordVisibility = (field: string) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  const isAnyFieldEmpty = Object.values(user).some((value) => value === '');
  return (
    <div className="w-full h-screen flex flex-col sm:flex-row mr-60" >
      <div className="sm:flex w-1/2 relative flex items-center justify-center">
        <div className="inset-0">
          <Image
            src="/Assets/backgrounds.png"
            alt="Background"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="w-full sm:w-1/2 bg-[#F5F5F5] flex flex-col items-center justify-center p-4 sm:p-20 px-4 text-center sm:text-left mr-40">
        <h1 className="mt-4 -mr-6 mb-4 sm:mb-8 text-2xl sm:text-4xl font-poppins text-black">
          <span className="font-extrabold">Welcome to</span>{' '}
          <span className="text-teal-300 font-Gugi">Ecobasi</span>
        </h1>
        <div className="mb-2">
          <label htmlFor="description" className="block text-gray-700 font-medium font-Poppins">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={user.description}
            onChange={handleInputChange}
            className="h-14 px-5 rounded-2xl border-2 border-blue-200 bg-white"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="company_id" className="block text-gray-700 font-medium font-Poppins">
            Company ID:
          </label>
          <input
            type="text"
            id="company_id"
            name="company_id"
            value={user.company_id}
            onChange={handleInputChange}
            className="h-14 px-5 rounded-2xl border-2 border-blue-200 bg-white"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="username" className="block text-gray-700 font-medium font-Poppins">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            className="h-14 px-5 rounded-2xl border-2 border-blue-200 bg-white"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="location" className="block text-gray-700 font-medium font-Poppins">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={user.location}
            onChange={handleInputChange}
            className="h-14 px-4 rounded-2xl border-2 border-blue-200 bg-white"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block text-gray-700 font-medium font-Poppins">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="h-14 px-5 rounded-2xl border-2 border-blue-200 bg-white"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone_number" className="block text-gray-700 font-medium font-Poppins">
            Phone Number:
          </label>
          <input
            type="text"
            placeholder="start with your code (e.g.,+254)"
            id="phone_number"
            name="phone_number"
            value={user.phone_number}
            onChange={handleInputChange}
            className="h-14 px-5 rounded-2xl border-2 border-blue-200 bg-white placeholder-text-sm"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block text-gray-700 font-medium font-Poppins">
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="h-14 px-5 rounded-2xl border-2 border-blue-200 bg-white"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('password')}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium font-Poppins">
            Confirm Password:
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputChange}
              className="h-14 px-6 rounded-2xl border-2 border-blue-200 bg-white"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        {isAnyFieldEmpty && (
          <p className="text-red-500 font-medium mb-4">Please fill out all the fields before proceeding.</p>
        )}
        {isAnyFieldEmpty ? (
          <button
            className="mt-2 bg-[#0C8283] text-white py-2 rounded-lg w-[228px] h-[45px] hover:bg-opacity-60 focus:outline-none focus:bg-opacity-80 text-lg font-Poppins font-normal"
            disabled
          >
            Sign Up
          </button>
        ) : (
            <button
              onClick={handleSubmit}
              className="mt-2 bg-[#0C8283] text-white py-2 rounded-lg w-[228px] h-[45px] hover:bg-opacity-60 focus:outline-none focus:bg-opacity-80 text-lg font-Poppins font-normal ml-4"
            >
              Sign Up
            </button>
        )}
        <div>{response}</div>
        <p className="mt-4 -mr-12 text-gray-400 text-center font-Poppins text-base sm:text-lg -ml-12 label">
          Already have an account?{' '}
          <Link href="/login">
            <span className="text-teal-300 font-Poppins font-bold">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;