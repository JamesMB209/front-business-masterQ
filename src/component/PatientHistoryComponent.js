import React from "react";
import Accordion from "react-bootstrap/Accordion";

const PatientHistoryComponent = (props) => {
  return (
    <div>
      {props.history.length == 0
        ? ""
        : props.history
            .filter(
              (e) => e.diagnosis != undefined && e.created_at != undefined
            )
            .map((e, i) => {
              return (
                <div>
                  <Accordion>
                    <Accordion.Item eventKey={i}>
                      <Accordion.Header>
                        Previous Visit : {new Date(e.created_at).getFullYear()}/
                        {new Date(e.created_at).getMonth()}/
                        {new Date(e.created_at).getDate()} -{" "}
                        {new Date().getDate() -
                          new Date(e.created_at).getDate()}{" "}
                        day(s) ago.
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>Diagnosis: {e.diagnosis}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              );
            })}
    </div>
  );
};

export default PatientHistoryComponent;
