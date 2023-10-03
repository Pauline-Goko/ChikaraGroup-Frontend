"use client";
import Image from "next/image";
import React from "react";
import { UserData } from "@/app/hooks/useGetDetails";
import useGetDetails from "@/app/hooks/useGetDetails";
import Layout from "@/app/component/Layout";


const Profile = ({ params: { id } }: { params: { id: number } }) => {
  const { details }: { details?: UserData } = useGetDetails(id);
  const userData = details;
  
  return (
    <Layout>
    <div
      className="bg bg-cover bg-center"
      style={{
        width: "160vh",
        backgroundImage: "url(/images/Bg-pic.png)",
        height: "20vh",
      }}
    >
      <div className="container mx-auto py-8">
        <div className="lg:flex ">
          {userData && (
            <div className="lg:w-9/6 ">
              <div className="profile-pic relative">
                <Image
                width={150}
                height={150}
                src={userData.image}
                alt="company logo"
                  className="w-60 h-auto rounded-md ml-44 mt-7 lg:mb-10"
                />
        
                <span className="absolute top-16 ml-32 text-black font-bold text-2xl mt-20 gap-4 lg:absolute lg:left-80 lg:mt-20 lg:flex lg:flex-col">
                  {userData.username}
                </span>
              </div>
              <div className="flex">
            
              <Image
                width={400}
                height={150}
                src={userData.home_image}
                alt="company photo"
                className="w-full rounded-md border-2 border-teal-500"
                />
              
              <div className=" mt-4 ml-4 mr-16 lg:mt-0">
                <div className="info mt-4 lg:ml-4">
                  <h1 className="text-teal-500 text-xl font-bold mt-4 mb-4">
                    Profile Information
                  </h1>
                  <p className="text-gray-500 mb-10">
                    {userData.description}
                  </p>
                  <p className="text-gray-500 mb-3 ">
                    <span className="font-bold text-black">Name:</span> {userData.username}
                  </p>
                  <p className="text-gray-500 mb-3">
                    <span className="font-bold text-black mb-3">Phone Number: </span> 
                    {userData.phone_number}
                  </p>
                  <p className="text-gray-500 mb-3">
                    <span className="font-bold text-black">Email address: </span>
                    {userData.email}
                  </p>
                  <p className="text-gray-500 mb-3">
                    <span className="font-bold text-black">Location: </span>
                    {userData.location}
                  </p>
                </div>
              </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Profile;

