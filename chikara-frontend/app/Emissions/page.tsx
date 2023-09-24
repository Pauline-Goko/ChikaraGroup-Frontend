import React from 'react';
import CarbonEmitted from '../limitChart/page';
import CarbonAvoided from '../carbonChart/page';

const Emission = () => {
  return (
    <div className=" h-screen bg-white">
        < CarbonEmitted />
        < CarbonAvoided />



    </div>
  );
};

export default Emission;
