
export const getChart = async () => {

    const url = `/api/get-charts`
   

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Page not found');
      }
      const result = await response.json();
      return result;
    } catch (error:any) {
      throw new Error(error.message || 'Failed to fetch limit chart');
    }

  };

export const getEmissionChart = async () => {
   
    const url = `/api/get-emission-chart`
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Page not found');
        }
        const result = await response.json();
        return result;
      } catch (error:any) {
        throw new Error(error.message || 'Failed to fetch emission chart');
      }
  
    };

export const getCreditChart = async () => {
     
      const url = `/api/get-credits-chart`
    
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Page not found');
          }
          const result = await response.json();
          return result;
        } catch (error:any) {
          throw new Error(error.message || 'Failed to fetch credits chart');
        }
    
      };

