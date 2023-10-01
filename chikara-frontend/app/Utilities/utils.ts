

export const getVehicles= async()=>{
    const url ='api/get-vehicles'
        const response = await fetch(url)
        const result = await response.json();
        return result;
    }
