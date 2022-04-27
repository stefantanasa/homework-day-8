import React from "react";

const LoadingSpinner = ({ loading }) => {
  return (
    <div className={`spinner-border text-info ${loading}`} role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
