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
            <Col className="">
            <div key={doctorDetail.id}>
              <h2>{doctorDetail.name}</h2>
              {businessObjectStore[doctorDetail.id].queue === undefined ? (
                <h4>BIG FAT ERROR NO BUSINESS OBJECT STORE</h4>
              ) : (
                businessObjectStore[doctorDetail.id].queue.map((e) => {
                  return <p>{e.f_name} {e.l_name}</p>;
                })
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
