import {getVehicles} from "@/app/Utilities/utils";
import { useEffect,useState } from "react";

export interface VehicleLists{
    chassis_number: string,
    emission_value: string,
    engine_type: string,
    id: string,
    vehicle_model: string,
    year: string,
};

export const usegetVehicles = () => {
    const [vehicles, setVehicles] = useState<VehicleLists[]>([]);

    useEffect(()=>{
     const fetchVehicles = (async() => {
try{
    const vehicles = await getVehicles();
    setVehicles(vehicles);
// console.log("thisis",{vehicles});

}catch(error){

    console.error('Cannot find vehicles', error);
}
})
fetchVehicles();

    },[])
    return vehicles
}




