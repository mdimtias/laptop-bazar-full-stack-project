import React from "react";
import Loader from "../../../assets/Loading/loading.svg";
const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={Loader} alt="Loading..." />
    </div>
  );
};

export default Loading;
