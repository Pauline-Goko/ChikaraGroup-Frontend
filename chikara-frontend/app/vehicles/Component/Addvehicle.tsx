import React from 'react';

interface AddVehicleFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
  newItem: {
    year: string;
    vehicleId: string,
    model: string;
    chassisNumber: string;
    ghgEmissions: string;
    engineType: string;
    month: string;
  };
}

const AddVehicleForm: React.FC<AddVehicleFormProps> = ({
  isVisible,
  toggleVisibility,
  handleInputChange,
  handleSave,
  newItem,
}) => {
  return (
    isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-30  z-10">
      <form onSubmit={handleSave} className="absolute w-3/6 h-[450px] top-[300px] ml-[500px] bg-white p-4 border-none rounded-lg shadow-sm shadow-black z-10">
        <h1 className="font-black text-customGreen text-left text-2xl ml-96 my-10">Add Vehicle</h1>
        <div className="grid grid-cols-2 mx-2 pl-6 gap-2">
            <input type="text" name="year" value={newItem.year} onChange={handleInputChange} placeholder="Year" className="px-6 py-4 text-sm border-gray-400 rounded border mb-5 mr-5 focus:outline-none "/>
            <input type="text" name="model" value={newItem.model} onChange={handleInputChange} placeholder="Vehicle model" className="border-gray-400 border rounded-md px-6 py-4 text-sm mb-5 mr-5 focus:outline-none "/>
            <input type="text" name="chassisNumber" value={newItem.chassisNumber} onChange={handleInputChange} placeholder="Chassis Number" className="border-gray-400 border rounded-md px-6 py-4 text-sm mb-5 mr-5 focus:outline-none "/>
            <input type="text" name="ghgEmissions" value={newItem.ghgEmissions} onChange={handleInputChange} placeholder="GHG Emissions" className="border-gray-400 border rounded-md px-6 py-4 text-sm mb-5 mr-5 focus:outline-none "/>
            <input type="text" name="engineType" value={newItem.engineType} onChange={handleInputChange} placeholder="Engine Type" className="border-gray-400 border rounded-md px-6 py-4 text-sm mb-5 mr-5 focus:outline-none "/>
            <input type="text" name="month" value={newItem.month} onChange={handleInputChange} placeholder="Month" className="border-gray-400 border rounded-md px-6 py-4 text-sm mb-5 mr-5 focus:outline-none "/>
         </div>
      
        {newItem.year && newItem.model && newItem.chassisNumber && newItem.ghgEmissions && newItem.engineType && newItem.month ? (

     <>
     <button type="button" className="text-xxl px-10 py-2 bg-gray-300 rounded-xl ml-[302px]" onClick={toggleVisibility}>Cancel </button>
     <button type="submit" className="text-white text-md px-10 py-2  bg-darkGreen rounded-xl ml-14 mt-4" onChange={handleSave}>Save</button>
     </>
     ) : (
      <>
      <button type="button" className="text-xxl text-gray px-10 py-2 bg-gray-300 rounded-xl ml-[302px]" onClick={toggleVisibility}>Cancel </button>
      <button type="submit" className="text-white text-md px-10 py-2  bg-darkGreen rounded-xl ml-14 mt-4" onChange={handleSave}>Save</button>
      </>
      )}
        
      </form>
      </div>)
  );
};

export default AddVehicleForm;

