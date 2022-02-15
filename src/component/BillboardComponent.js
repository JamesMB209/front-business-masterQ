import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";

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
            <Col key={doctorDetail.id} md={4} sm={9}>
            <div className='text-center '>
                  <div className='overlap_box'>
                  <h4 className='my-2'> Room {doctorDetail.room} </h4>
                  <h4> Dr {doctorDetail.name} </h4>
                  </div>

                 {/*  <hr className='under-line my-4'/> */}

              {businessObjectStore[doctorDetail.id] === undefined ? (
                      ""
                    ) : businessObjectStore[doctorDetail.id].queue.length ===
                      0 ? (
                      <h6>No patients in queue</h6>
              ) : (
              <div className='board_box'>
                    <h5 className='mt-5 pt-5'>
                      Next Patient:
                      </h5>
                        <h3>
                        {businessObjectStore[doctorDetail.id].queue[1].f_name} {businessObjectStore[doctorDetail.id].queue[1].l_name}
                      </h3>

                      <h5 className='mt-5'>Patients in queue: </h5>
                        <h3>
                        {businessObjectStore[doctorDetail.id].queue.length-1}
                        </h3>
                    
                    </div>
                    
              )}
            </div>
            </Col>
          );
        })
      )}
      </Row>
      {/* <Container>
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
        </Row> */}
      </Container>
    </>
  );
};

export default BillboardComponent;
