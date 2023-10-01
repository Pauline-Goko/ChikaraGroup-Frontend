import React from "react";
import {AiFillEdit} from 'react-icons/ai'
import ProfileEdit from "../editProfile/page";
import Layout from "../component/Layout";


const Profile: React.FC = () => {
  return (
    <Layout>
         <div
      className="bg bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/Bg-pic.png)",
        height: "30vh",
      }}
    >
      <div className="container mx-auto py-8 ">
        <div className="lg:flex justify-center items-center">
          {/* First Half */}
          <div className="lg:w-1/2">
            <div className="profile-pic relative">
              
            
              <img
                src="/images/toyotaa.png"
                alt="company logo"
                className="w-60 h-auto rounded-md ml-44 mt-20 lg:mb-10"
              />
              
              <div className=" cursor-pointer bg-color-red w-">
                <a href="/editProfile">
                  
                <AiFillEdit className=" w-8 h-8 text-teal-500 ml-80 left-16 absolute -mt-20 "   />
                </a>
               
        
              
              </div>
              <span className="absolute top-16 ml-32 text-black font-bold text-2xl mt-20 gap-4 lg:absolute lg:left-80 lg:mt-20 lg:flex lg:flex-col">
                Toyota Kenya
              </span>
            </div>
            <div className="company mt-10 ml-8 relative items-center justify-center">
              <img
                src="/images/Toyota-Kenya.jpeg"
                alt="company photo"
                className="w-full rounded-md border-2 border-teal-500"
              />
              
            </div>
          </div>

          {/* Second Half */}
          <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-4 -mb-60">

            <div className="info mt-4 lg:ml-4">
              <h1 className="text-teal-500 text-xl font-bold mt-4 mb-4">
                Profile Information
              </h1>
              <p className="text-gray-700 mb-10 mr-8">
                <span className="font-bold">Toyota Kenya Limited</span> is a
                wholly-owned subsidiary of Toyota based in Nairobi, Kenya. The
                company was founded in January 2012 as a successor to Toyota
                East Africa Limited. It is the importer and distributor of
                Toyota, Yamaha, Hino, and Suzuki vehicles to Kenya.
              </p>
              <p className="text-gray-700 mb-3 ">
                <span className="font-bold">Name:</span> Toyota Kenya
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-bold mb-3">Phone Number:</span> +254 719
                029 760
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-bold ">Email address:</span>{" "}
                toyotakenya@gmail.com
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-bold">Location:</span> Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
 
  );
};

export default Profile;
