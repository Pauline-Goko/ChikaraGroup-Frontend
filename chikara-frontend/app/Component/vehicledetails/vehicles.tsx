'use client'
import React, { useState, useEffect } from "react";
import vehiclelist from "./vehiclelist";
import { IoTrashOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import AddVehicleForm from "./addvehicle";


interface VehicleProps{
  chassisNumber : string,
  vehicleId: string,
  model: string,
  year: string,
  ghgEmissions: string,
  engineType: string,
  month: string
}
const Frames = () => {
const [vehicles, setVehicle] = useState<VehicleProps[] | null>(null);
const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
const [searchQuery, setSearchQuery] = useState("");
  const [newItem, setNewItem] = useState({
    year: "",
    model: "",
    chassisNumber: "",
    ghgEmissions: "",
    engineType: "",
    month: "",
  });
 const [isFormVisible, setIsFormVisible] = useState(false);

   const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  // add item

useEffect(() => {
    (async() => {
        const isvehicles = await vehiclelist;
        setVehicle(isvehicles);
        console.log({isvehicles});
    })();
}, []);

// filter vehicles data by month
const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  event.preventDefault()
  const selectedMonth = event.target.value
    setSelectedMonth(selectedMonth === "" ? null : selectedMonth);
  };

  // search and month filter
  const filteredVehicles = selectedMonth
  ? (vehicles || []).filter((vehicle) => vehicle.month === selectedMonth &&
      vehicle.model.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : (vehicles || []).filter((vehicle) =>
      vehicle.model.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // search event
    const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value)};
// filter vehicles data by month

// add vehicle details
  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };


  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault();
    if (newItem.year && newItem.model && newItem.chassisNumber && newItem.ghgEmissions && newItem.engineType && newItem.month) {
      setVehicle((prevVehicles) => {
        if (prevVehicles === null) {
          return [{ ...newItem, vehicleId: generateUniqueId() }];
        } else {
          return [{ ...newItem, vehicleId: generateUniqueId() }, ...prevVehicles];
        }
      });
      setNewItem({
            year: "",
            model: "",
            chassisNumber: "",
            ghgEmissions: "",
            engineType: "",
            month: "",
          });
      
          setIsFormVisible(false); 
    } else {
      alert("Please fill out all fields before saving.");
    }
  };
  
  const generateUniqueId = () => {
    return `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  };
  
// add vehicle details
// save vehicle details
const handleSave = () => {
  if (newItem.year && newItem.model && newItem.chassisNumber && newItem.ghgEmissions && newItem.engineType && newItem.month) {
    setVehicle((prevVehicles) => {
      if (!prevVehicles) {
        return [newItem];
      } else {
        return [newItem, ...prevVehicles];
      }
    });
    setNewItem({
      year: "",
      model: "",
      chassisNumber: "",
      ghgEmissions: "",
      engineType: "",
      month: "",
    });
    setIsFormVisible(false);
  } else {
    alert("Please fill out all fields before saving.");
  }
};
// save vehicle details

// delete 
const handleDelete = (vehicleId: string) => {
  const updatedVehicles = (vehicles || []).filter(item => item.vehicleId !== vehicleId);
  setVehicle(updatedVehicles);
};
// delete 

// search
    return (
      <div>
<div className="relative mt-20 ml-80">
      <input type="text" placeholder="Search..."
             className="py-4 pl-10 pr-80 border rounded-lg border-black font-light focus:outline-none"
             value={searchQuery} onChange={handleSearch} />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <ImSearch className="text-darkGreen text-2xl" />
      </div>
    </div>

<div  className="p-4 max-w-xxl mx-auto bg-white border-customGreen mt-20">
<div className="w-full">
   <div className="flex items-left mb-10 pl-48 ">
      <h1 className="font-black text-customGreen text-left text-2xl ml-32">All Cars</h1>
   
{/* search */}
   {/* filter with months */}

   <select className="ml-10 mb-2" onChange={handleMonthChange} value={selectedMonth || ""}>
  <option value="">All Months</option>
  {filteredVehicles && filteredVehicles.map((vehicle) => (
    <option key={vehicle.vehicleId} value={vehicle.month}>
      {vehicle.month}
    </option>
  ))}
</select>

   {/* filter with months */}

{/* add vehicle details */}
<AiOutlinePlusCircle onClick={toggleFormVisibility} className="text-darkGreen font-black text-4xl ml-auto mr-64 cursor-pointer hover:opacity-75" />
         
         <AddVehicleForm
           isVisible={isFormVisible}
           toggleVisibility={toggleFormVisibility}
           handleInputChange={handleInputChange}
           handleSave={handleSave}
           newItem={newItem}
         />
{/* add vehicle details */}
    </div>
    <div className="items-center justify-center">
<ul className="my-custom-list-style flex items-center mt-4">
  <li className="text-xl font-semibold text-black ml-[330px]">Year</li>
  <li className="text-xl font-semibold text-black ml-[215px]">Model</li>
  <li className="text-xl font-semibold text-black ml-[165px]">Chassis Number</li>
  <li className="text-xl font-semibold text-black ml-[155px]">GHG Emissions</li>
  <li className="text-xl font-semibold text-black ml-[125px]">Engine type</li>
</ul>
</div>
  </div>
  <div className=" inset-x-0 bottom-0 h-0.5 w-4/5 bg-darkGreen my-4 ml-56" style={{ boxShadow: "0px 1px 4px rgba(3, 88, 82, 0.5)" }}></div>     

    {/* vehicles lists */}
    <div >
        {filteredVehicles? (
          filteredVehicles.map((item) => (
<div className="">

{/* <div className="py-4 px-3">
<ul key={item.vehicleId} className="flex items-center space-x-44 mx-80 mt-4">
  <li className="text-l font-normal text-black mr-12">{item.year}</li>
  <li className="text-l font-normal text-black">{item.model}</li>
  <li className="text-l font-normal text-black">{item.chassisNumber}</li>
  <li className="text-l font-normal text-black">{item.ghgEmissions}</li>
  <li className="text-l font-normal text-black -mr-2">{item.engineType}</li>
</ul>
  <IoTrashOutline onClick={() => handleDelete(item.vehicleId)} className="text-customGreen cursor-pointer text-2xl font-black -mt-7 ml-[85%]"/>
</div> */}

<div className="py-4 px-3">
  <ul key={item.vehicleId} className="flex items-center space-x-44 mx-80 mt-4">
    <li className="text-l font-normal text-black w-[110px]">{item.year}</li>
    <li className="text-l font-normal text-black w-[100px]">{item.model}</li>
    <li className="text-l font-normal text-black w-[200px]">{item.chassisNumber}</li>
    <li className="text-l font-normal text-black w-[150px]">{item.ghgEmissions}</li>
    <li className="text-l font-normal text-black w-[150px]">{item.engineType}</li>
  </ul>
  <IoTrashOutline onClick={() => handleDelete(item.vehicleId)} className="text-customGreen cursor-pointer text-2xl font-black -mt-7 ml-[85%]"/>
</div>


<div className=" inset-x-0 bottom-0 h-0.5 w-4/5 bg-darkGreen my-4 ml-56" style={{ boxShadow: "0px 1px 4px rgba(3, 88, 82, 0.5)" }}></div>     

</div>))) : (
          <p>Loading...</p>
        )}
      </div> 
    {/* vehicles lists */}

      </div> 

</div>  

    )
}

export default Frames;
