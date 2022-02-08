import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { emit } from "../redux/webSocets/actions";

const QueueComponent = () => {
  const businessObjectStore = useSelector((state) => state.businessObjectStore);
  const apiStore = useSelector((state) => state.apiStore);
  console.log(apiStore);

  return (
    <>
      {apiStore === undefined ? (
        <h4>Billboard Error</h4>
      ) : (
        apiStore.map((doctorDetail) => {
          return (
            <div key={doctorDetail.id}>
              <h2>{doctorDetail.name}</h2>
              {businessObjectStore[doctorDetail.id].queue === undefined ? (
                <h4>BIG FAT ERROR NO BUSINESSOBJECTSTORE</h4>
              ) : (
                businessObjectStore[doctorDetail.id].queue.map((e) => {
                  return (
                    <div>
                        <button onClick={() => emit("MOVE_UP", {doctor: doctorDetail.id,patientID:e.id})}>Move To Top</button>
                      {e.f_name} {e.l_name}
                        <button onClick={() => emit("DELETE", {doctor: doctorDetail.id,patientID:e.id})}>Delete </button>
                    </div>
                  );
                })
              )}
            </div>
          );
        })
      )}
    </>
  );
};

export default QueueComponent;
