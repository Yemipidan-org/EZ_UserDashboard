import React from "react";
import { css } from "@emotion/react";
import { DotLoader } from "react-spinners";

const LoadingSpinner = ({ loading }) => {
     const containerStyles = loading
    ? {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#00000069",
        position: "absolute",
        right: 0,
        left: 0,
        zIndex: 2,
      }
    : {};
  return (
    <div className="loading-spinner" style={containerStyles}>
      <DotLoader color={"#36D7B7"} loading={loading} size={30} />
    </div>
  );
};

export default LoadingSpinner;
