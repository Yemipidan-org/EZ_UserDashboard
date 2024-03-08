const errorContainer = document.getElementById("errorCont");
const errorMessageElement = document.getElementById("errorMessage");
const passwordErrorMsg = document.getElementById("pwdErrMsg");
const inputEls = document.querySelectorAll("input");
const mainEl = document.getElementById("r");

async function submitRegisterForm() {
  // ... (copy the rest of your JavaScript code here)
  try {
    const formData = new FormData(document.getElementById("register-form"));
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    const isEmpty = Object.values(formObject).some((value) => value === "");

    if (isEmpty) {
      errorMessageElement.innerText = "Fill all inputs";
      errorContainer.style.display = "block";
      errorMessageElement.style.color = "red";
      setTimeout(() => {
        errorContainer.style.display = "none";
      }, 3000);
      return;
    }

    const changeBorder = (cls) => {
      inputEls.forEach(function (input) {
        if (
          input.attributes.type?.value === "password" ||
          input.attributes.type?.value === "Cpassword"
        ) {
          if (cls) {
            input.style.border = "1px solid rgb(0, 145, 255)";
          } else {
            input.style.border = "1px solid red";
            passwordErrorMsg.innerText =
              "Password and Confirm password do not match";
            passwordErrorMsg.style.color = "rgb(254, 4, 0);";
            passwordErrorMsg.style.display = "block";
          }
        }
      });
    };

    let cls = true;
    // Check if passwords match
    console.log(formObject.password, formObject.confirmPassword);
    if (formObject.password !== formObject.confirmPassword) {
      changeBorder(!cls);
      setTimeout(() => {
        cls = true;
        changeBorder(cls);
        passwordErrorMsg.style.display = "none";
      }, 3000);
      mainEl.style.display = "none";
      return;
    } else {
      mainEl.style.display = "block";
      const sendMessageEndpoint = "http://localhost:3000/send-message";

      // Make a POST request to the server to send the message
      const sendMessageResponse = await fetch(sendMessageEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (sendMessageResponse.ok) {
        const data = await sendMessageResponse.json();
        console.log("Message sent to the server successfully");
        const dotsContElement = document.getElementById("dot-cont");
        // if (dotsContElement) {
        // dotsContElement.remove();
        errorMessageElement.innerText = data.message;
        errorContainer.style.display = "block";
        errorMessageElement.style.color = "green";
        mainEl.style.display = "none";
        // }
      } else {
        try {
          const errorData = await sendMessageResponse.json();
          console.log(errorData.message);
          mainEl.style.display = "none";
        } catch (error) {
          console.log("Internal server error", error);
          console.error("Failed to send message to the server");
          console.log(mainEl);
          mainEl.style.display = "none";
        }
      }
    }
  } catch (error) {
    console.error("Error:", error);
    console.log("Internal Server Error");
    mainEl.style.display = "none";
  }
}

async function submitDataFromVerify() {
  var fullURL = window.location.href;

  // Get the URL parameters
  var urlParams = new URLSearchParams(window.location.search);

  // Get the value of 'key' parameter
  var key = urlParams.get("key");

  // Get the value of 'dataenc' parameter
  var enc = urlParams.get("enc");

  // Display the values
  console.log("Full URL:", fullURL);
  console.log("Key:", key);
  console.log("Dataenc:", enc);

  const response = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ key, enc }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data); // Success message
  } else {
    try {
      const errorData = await response.json();
      // errorMessageElement.innerText =
      //   errorData.message || "Unknown error occurred";
    } catch (error) {
      console.error("Error parsing error details:", error);
      console.log("Status code:", response);
      errorMessageElement.innerText = "Internal Server Error";
    }
  }
}

async function submitLoginForm() {
  // ... (copy the rest of your JavaScript code here)
  try {
    const formData = new FormData(document.getElementById("login-form"));
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log(formObject);
    const isEmpty = Object.values(formObject).some((value) => value === "");

    if (isEmpty) {
      console.log("fill inputs");
      errorMessageElement.innerText = "Fill all inputs";
      errorContainer.style.display = "block";
      errorMessageElement.style.color = "red";
      setTimeout(() => {
        errorContainer.style.display = "none";
      }, 3000);
      return;
    }

    const sendLoginEndpoint = "http://localhost:3000/your-route";

    // Make a POST request to the server to send the message
    const sendMessageResponse = await fetch(sendLoginEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(formObject),
    });

    if (sendMessageResponse.ok) {
      const data = await sendMessageResponse.json();
      console.log(data);
      console.log("Message sent to the server successfully");

      document.cookie;
      fetch("http://localhost:3000/another-route", {
        method: "GET",
        credentials: "same-origin", // Important for cookies to be sent
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
      // const sessionToken = data.encryptedData;
      // document.cookie = `sessionToken=${sessionToken}; path=/`;
      // location.href = `http://localhost:5173/dashboard/dashboard3/?${data.id}`;
    } else {
      try {
        const errorData = await sendMessageResponse.json();
        console.log(errorData.message);
      } catch (error) {
        console.log("Internal server error", error);
        console.error("Failed to send message to the server");
      }
    }
  } catch (error) {
    console.error("Error:", error);
    console.log("Internal Server Error");
  }
}
