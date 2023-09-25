'use client'
import React, { useState, useEffect } from "react";
import vehiclelist from "./vehiclelist";
import { IoTrashOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';


interface VehicleProps{
  chassisNumber : string,
  model: string,
  vehicleId: string,
  ghgEmissions: string,
  engineType: string
}
const Frames = () => {
const [vehicles, setVehicle] = useState<VehicleProps[] | null>(null);
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

useEffect(() => {
  (async() => {
    const isvehicles = await vehiclelist;
    setVehicle(isvehicles);
    console.log({isvehicles});
  })();
}, []);



    return (

<div>
<div className="relative mt-20 ml-60">
      <input
        type="text"
        placeholder="Search..."
        className="py-4 pl-10 pr-80 border rounded-lg border-black font-light focus:outline-none"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <ImSearch className="text-darkGreen text-2xl" />
      </div>
    </div>

<div  className="p-4 max-w-xxl mx-auto bg-white border-customGreen mt-20">
<div className="w-full">
   <div className="flex items-left mb-10 pl-48 ">
      <h1 className="font-black text-customGreen text-left text-2xl">All Cars</h1>
   <select className="ml-10 mb-2">
      {months.map((month, index) => (
        <option key={index} value={index + 1}>{month}</option>
      ))}
    </select>
      <AiOutlinePlusCircle className="text-darkGreen font-black text-4xl ml-auto mr-52" />
    </div>
    <div className="w-full">
<ul className="my-custom-list-style flex items-center justify-evenly ml-18 mt-4">
  <li className="text-xl font-semibold text-black">Vehicle ID</li>
  <li className="text-xl font-semibold text-black">Model</li>
  <li className="text-xl font-semibold text-black">Chassis Number</li>
  <li className="text-xl font-semibold text-black">GHG Emissions</li>
  <li className="text-xl font-semibold text-black -ml-5">Engine type</li>
  <li>  </li>
</ul>
</div>
  {/* <div className="flex items-center space-x-40 ml-50">
    <span className="text-xl font-semibold text-black">Vehicle ID</span>
    <span className="text-xl font-semibold text-black">Model</span>
    <span className="text-xl font-semibold text-black">Chassis Number</span>
    <span className="text-xl font-semibold text-black">GHG Emissions</span>
    <span className="text-xl font-semibold text-black">Engine type</span>
   </div> */}
  </div>
  <div className=" inset-x-0 bottom-0 h-0.5 w-5/6 bg-darkGreen my-4 mx-40" style={{ boxShadow: "0px 1px 4px rgba(3, 88, 82, 0.5)" }}></div>     

    {/* vehicles lists */}
    <div >
        {vehicles ? (
          vehicles.map((item) => (
<div className="p-4 max-w-xxl mx-auto">

<div className="w-full">
<ul key={item.vehicleId} className="my-custom-list-style flex items-center justify-evenly ml-2 mt-4">
  <li className="text-l font-normal text-black mr-9">{item.vehicleId}</li>
  <li className="text-l font-normal text-black">{item.model}</li>
  <li className="text-l font-normal text-black">{item.chassisNumber}</li>
  <li className="text-l font-normal text-black">{item.ghgEmissions}</li>
  <li className="text-l font-normal text-black -mr-3">{item.engineType}</li>
  <li>  <IoTrashOutline className="text-customGreen cursor-pointer text-2xl font-black"/></li>
</ul>
</div>

<div className=" inset-x-0 bottom-0 h-0.5 w-5/6 bg-darkGreen my-4 mx-40" style={{ boxShadow: "0px 1px 4px rgba(3, 88, 82, 0.5)" }}></div>     

</div>))) : (
          <p>Loading...</p>
        )}
      </div> 
      </div> 
</div>
    )
}

export default Frames;