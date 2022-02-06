import React from "react";

const PharmacyQueueComponent = (props) => {
  console.log(props);
  return (
    <div>
      {props.pharmacy.queue.length ? props.pharmacy.queue.length : "no Q"}
      <button>Advance Pharmacy Queue</button>
    </div>
  );
};

export default PharmacyQueueComponent;
