import axios from "axios";

export default async function LoginSession(
  setUserId,
  setUserInfo,
  navigate,
  setWalletData
) {
  try {
    const loginSessionResponse = await axios.get(
      "http://localhost:3000/login-session",
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    // console.log(loginSessionResponse.data);
    setUserId(loginSessionResponse.data.user);

    if (loginSessionResponse.data.loggedIn) {
      const userDataResponse = await axios.get(
        `http://localhost:3000/get-userData/${loginSessionResponse.data.user}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      // console.log(userDataResponse.data);
      setUserInfo(userDataResponse.data.user);
      setWalletData(userDataResponse.data.wallet);
      // console.log(userDataResponse.data.wallet);
    } else {
      // Redirect or handle non-logged-in state
      navigate("/authentication/login/");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export const GetFirstName = (fullName) => {
  // Check if fullName is defined before trying to split
  if (fullName) {
    // Split the string at the first occurrence of a whitespace character
    const parts = fullName.split(/\s+/);

    // Check if there's at least one element (meaning there was a space)
    if (parts.length > 0) {
      return parts[0]; // Return the first element (first name)
    }
  }

  // Handle the case where fullName is undefined or no space in the string
  return fullName || ""; // Return the entire string if undefined or no space
};
