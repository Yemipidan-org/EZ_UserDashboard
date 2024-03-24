import axios from "axios";
import axiosInstance from "../../axiosConfig/axiosConfig";

export default async function LoginSession(
  setUserId = () => {},
  setUserInfo = () => {},
  navigate,
  setWalletData = () => {},
  setInvestments = () => {},
  setDepositsData = () => {},
  setAllInvestments = () => {}
) {
  try {
    const loginSessionResponse = await axiosInstance.get("/login-session", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    // console.log(loginSessionResponse.data);
    setUserId(loginSessionResponse.data.user);

    if (loginSessionResponse.data.loggedIn) {
      const userDataResponse = await axiosInstance.get(
        `/get-userData/${loginSessionResponse.data.user}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setUserInfo(userDataResponse.data.user);
      setWalletData(userDataResponse.data.wallet);
      const investments = await axiosInstance.get(
        `/get-investments/${loginSessionResponse.data.user}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      fetchData(setDepositsData, loginSessionResponse.data.user);
      // console.log("this is", investments.data.investments);
      setInvestments(investments.data.investments);
      setAllInvestments(investments.data.history);
    } else {
      // Redirect or handle non-logged-in state
      navigate("/authentication/login/");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

const fetchData = async (setDepositsData, walletId) => {
  try {
    const getAllAddedFunds = await axiosInstance.get(
      `/get-deposits/${walletId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // console.log("mod", modifiedFunds);
    // console.log(getAllAddedFunds);
    setDepositsData(getAllAddedFunds.data.funds);
  } catch (err) {
    console.log(err);
  }
};

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
