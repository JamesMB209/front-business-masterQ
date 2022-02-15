import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const BillboardComponent = () => {
  const businessObjectStore = useSelector((state) => state.businessObjectStore);
  const apiStore = useSelector((state) => state.apiStore);

  return (
    <>
      <Container>
        <Row>
          {apiStore === undefined ? (
            <h4>Doctors not found</h4>
          ) : (
            apiStore.map((doctorDetail, i) => {
              return (
                <Col key={doctorDetail.id} className="">
                  <div>
                    <h2>{doctorDetail.name}</h2>
                    {businessObjectStore[doctorDetail.id] === undefined ? (
                      ""
                    ) : businessObjectStore[doctorDetail.id].queue.length ===
                      0 ? (
                      <h6>No patients in queue</h6>
                    ) : (
                      <div>
                        <h5>
                          {businessObjectStore[doctorDetail.id].queue[0].f_name}{" "}
                          {businessObjectStore[doctorDetail.id].queue[0].l_name}
                        </h5>
                        <p>
                          {businessObjectStore[doctorDetail.id].queue.length -
                            1}
                        </p>
                      </div>
                      // )
                      // }
                      // )
                    )}
                  </div>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
};

export default BillboardComponent;
