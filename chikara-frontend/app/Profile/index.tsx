import React from "react";

const Profile: React.FC = () => {
  return (
    <div
      className="bg bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/Bg-pic.png)",
        height: "30vh",
      }}
    >
      <div className="container mx-auto py-8">
        <div className="lg:flex justify-center items-center">
          {/* First Half */}
          <div className="lg:w-1/2">
            <div className="profile-pic relative">
              <img
                src="/images/toyotaa.png"
                alt="company logo"
                className="w-60 h-auto rounded-md ml-12 mt-20 lg:mb-10"
              />

              <span className="absolute top-16 left-72 text-black font-bold text-3xl mt-20 gap-4 lg:absolute lg:left-80 lg:mt-20 lg:flex lg:flex-col">
                Toyota Kenya
              </span>
            </div>
            <div className="company mt-10 relative items-center justify-center">
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
              <p className="text-gray-700 mb-6">
                <span className="font-bold">Toyota Kenya Limited</span> is a
                wholly-owned subsidiary of Toyota based in Nairobi, Kenya. The
                company was founded in January 2012 as a successor to Toyota
                East Africa Limited. It is the importer and distributor of
                Toyota, Yamaha, Hino, and Suzuki vehicles to Kenya.
              </p>
              <p className="text-gray-700 mb-6 ">
                <span className="font-bold">Name:</span> Toyota Kenya
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold mb-6">Phone Number:</span> +254 719
                029 760
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold ">Email address:</span>{" "}
                toyotakenya@gmail.com
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold">Location:</span> Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
