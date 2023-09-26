import React from "react";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";


const ProfileEdit: React.FC = () => {
  return (
    <div
      className="bg bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/Bg-pic.png)",
        height: "30vh",
      }}
    >
      <div className="container mx-auto py-8">
        <div className=" ">
          {/* First Half */}
          <div className="lg:w-3/4">
            <div className="profile-pic relative">
              <div className="ml-32 ">
                <img
                  src="/images/toyotaa.png"
                  alt="company logo"
                  className="w-60 h-auto rounded-md ml-96 mt-20 lg:mb-10"
                />
              </div>
              <div className=" cursor-pointer ml-72">
                <Link href="/Profile">
                  <AiFillEdit className=" w-32 absolute h-8 text-teal-500 ml-96  -mt-20 " />
                </Link>
              </div>
              <hr className="ml-72 my-6" />
              <div className="">
                <div>
                  <div className=" ml-80 bg-white p-4 rounded shadow-md">
                    <div>
                      <div className="mb-4">
                        <label className="block text-teal-500 font-semibold">
                          Username
                        </label>
                        <input
                          type="text"
                          value="Toyota Kenya"
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-teal-500 font-semibold">
                          Location
                        </label>
                        <input
                          type="text"
                          value="Nairobi"
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-teal-500 font-semibold">
                          E-mail
                        </label>
                        <input
                          type="text"
                          value="toyotakenya@mail.com"
                          className=" w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-teal-500 font-semibold">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          value="+254 719 029 760"
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-teal-500 text-sxl font-semibold">
                          Bio
                        </label>
                        <textarea
                          rows={5}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        >
                          Toyota Kenya Limited is a wholly-owned subsidiary of
                          Toyota based in Nairobi, Kenya. The company was
                          founded in January 2012 as a successor to Toyota East
                          Africa Limited. It is the importer and distributor of
                          Toyota, Yamaha, Hino, and Suzuki vehicles to Kenya.
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white p-4 ml-80 rounded shadow-md">
                    <div className="mb-4">
                      <label className="block text-teal-500 font-semibold">
                        Current password
                      </label>
                      <input
                        type="password"
                        value="atunyo"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-teal-500 font-semibold">
                        New password
                      </label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-teal-500 font-semibold">
                        Repeat new password
                      </label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                  </div>
                  <div className="mt-4 ml-96 ">
                    <Link href="/profile">
                      <button className="ml-32 mr-8 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 hover:text-white">
                        Cancel
                      </button>
                    </Link>
                    <Link href="/profile">
                      <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700">
                        Save changes
                      </button>
                      &nbsp;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
