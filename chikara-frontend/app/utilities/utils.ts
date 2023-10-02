export const getDetails = async (id: number) => {
 
  const response = await fetch(`/api/get-user/${id}`, {
    method: "GET",
  });
  const result = await response.json();
  return result;
} ;