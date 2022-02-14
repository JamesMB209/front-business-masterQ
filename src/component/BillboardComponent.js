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
            <Col md={4} sm={9}>
            <div className='text-center '
            key={doctorDetail.id}>
                   <div className='overlap_box'>
                  <h4 className='my-2'> Room {doctorDetail.room} </h4>
                  <h4> Dr {doctorDetail.name} </h4>
                  </div>

                 {/*  <hr className='under-line my-4'/> */}

              {businessObjectStore[doctorDetail.id].queue === undefined ? (
                <h4>BIG FAT ERROR NO BUSINESS OBJECT STORE</h4>
              ) : (
              
              
                    <>
                    <div className='board_box'>
                    <h5>Calling Patient:{doctorDetail.queue}  </h5>
                    
                    <h5>Patients in queue:{doctorDetail.queue}</h5>
                    
                    </div>
                    </>
                
              
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
