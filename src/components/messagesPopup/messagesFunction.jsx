import { toast, Flip, ToastContainer, Slide } from "react-toastify";

export function Danger1(errorMsg) {
  toast.error(<p className="text-white tx-16 mb-0 ">{errorMsg}</p>, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: false,
    transition: Flip,
    theme: "colored",
  });
}

export function Danger4(successMsg) {
  toast.success(
    <p className="text-white tx-16 mb-0 ">{successMsg}</p>,

    {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: false,
      transition: Slide,
      autoClose: 1000,
      theme: "colored",
    }
  );
}
