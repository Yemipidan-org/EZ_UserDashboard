import Swal from "sweetalert2";

export function copyAddress(textElement, setCopiedAddress) {
    console.log("herro");
  if (textElement.current) {
    const trimmedText = textElement.current.textContent.trim(); // Trim whitespace

    // Enhanced error handling and user feedback:
    navigator.clipboard
      .writeText(trimmedText)
      .then(() => {
        console.log("Text copiedAddress successfully!");
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);

        // Optionally display a visual success message to the user (e.g., toast notification)
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
        // Display a user-friendly error message (e.g., "Copying failed. Please try again.")
      });
  }
}

export function copyBtcAMount(amountElement, setcopiedBtcAmount) {
  if (amountElement.current) {
    const trimmedText = amountElement.current.textContent.trim(); // Trim whitespace

    // Enhanced error handling and user feedback:
    navigator.clipboard
      .writeText(trimmedText)
      .then(() => {
        console.log("Text copiedAddress successfully!");
        setcopiedBtcAmount(true);
        setTimeout(() => setcopiedBtcAmount(false), 2000);

        // Optionally display a visual success message to the user (e.g., toast notification)
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
        // Display a user-friendly error message (e.g., "Copying failed. Please try again.")
      });
  }
}



export function Timer2  () {
  let timerInterval;
  Swal.fire({
    title: "",
    html: "Pending, funds will reflect in your wallet shortly",
    timer: 0,

    timerProgressBar: true,
    didOpen: () => {
      // Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
};

export function Timer () {
  let timerInterval;
  Swal.fire({
    title: "",
    html: "",
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
      Timer2();
    }
  });
};