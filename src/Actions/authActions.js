export const login = (username, password) => async (dispatch) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Save user object to Redux state and navigate to profile page
        // dispatch appropriate action to update Redux state
      } else {
        // Handle error and show it in the frontend
        // dispatch an action to store the error in Redux state
      }
    } catch (error) {
      // Handle fetch or other errors
    }
  };