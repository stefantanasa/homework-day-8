import React from "react";

const Alarm = ({ message, typeAlarm, show }) => {
  return (
    <div class={`alert alert-${typeAlarm}`} role="alert">
      {message}
    </div>
  );
};

export default Alarm;
