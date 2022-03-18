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
            <h4>Billboard Error</h4>
          ) : (
            apiStore.map((doctorDetail) => {
              return (
                <Col lg={4} md={6} sm={12} key={doctorDetail.id}>
                  <div className="text-center">
                    <div className="overlap_box">
                      <h4 className="my-2"> Room {doctorDetail.room} </h4>
                      <h4> Dr {doctorDetail.name} </h4>
                    </div>

                    {businessObjectStore[doctorDetail.id] === undefined ? (
                      ""
                    ) : 
                      businessObjectStore[doctorDetail.id].queue.length ===
                        0 ? (
                      <div className="board_box">
                        <h5 className="mt-5 pt-5">No patients in queue</h5>
                      </div>
                    ) : (
                      <div className="board_box">
                        <h5 className="mt-5 pt-5">Calling Patient:</h5>
                        <h3>
                          {businessObjectStore[doctorDetail.id].queue[0].f_name}{" "}
                          {businessObjectStore[doctorDetail.id].queue[0].l_name}
                        </h3>

                        <h5 className="mt-5">Patients in queue: </h5>
                        <h3>
                          {businessObjectStore[doctorDetail.id].queue.length -
                            1}
                        </h3>
                      </div>
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
