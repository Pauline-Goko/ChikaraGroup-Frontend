export const UseLoginUser = async (credentials: any) => {
  try {
    const response = await fetch('/api/login-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error occurred. Please check the console for details.');
  }
};