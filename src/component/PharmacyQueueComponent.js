import React, {useEffect} from "react";

const PharmacyQueueComponent = (props) => {
  useEffect(() => {
    console.log("props was changed in phamracy")
  }, [props])

  console.log(props);
  return (
    <div>
      {props.pharmacy ? props.pharmacy.queue.map((e) => <p>{e.f_name}</p>) : "no Q"}
      <button>Advance Pharmacy Queue</button>
    </div>
  );
};

export default PharmacyQueueComponent;
