import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { emit } from "../redux/webSocets/actions";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const QueueComponent = () => {
  const businessObjectStore = useSelector((state) => state.businessObjectStore);
  const apiStore = useSelector((state) => state.apiStore);
  const [modalPatientId, setModalPatientId] = useState("");
  const [modalDoctorId, setModalDoctorId] = useState("");
  // console.log(apiStore);

  //alert modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setModalPatientId("");
    setModalDoctorId("");
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row>
          {apiStore === undefined ? (
            <h4>Queue Component Error</h4>
          ) : (
            apiStore.map((doctorDetail, i) => {
              return (
                <Col key={doctorDetail.id} md={4} sm={9}>
                  <div className="text-center " key={doctorDetail.id}>
                    <h5 className="my-2"> Room {doctorDetail.room} </h5>
                    <h5> Dr {doctorDetail.name} </h5>
                    <hr className="under-line my-4" />

                    {businessObjectStore[doctorDetail.id] === undefined
                      ? ""
                      : businessObjectStore[doctorDetail.id].queue.length === 0
                      ? ""
                      : businessObjectStore[doctorDetail.id].queue.map((e) => {
                          return (
                            <div key={e.id} className="m-2 queue_box">
                              <ArrowCircleUpOutlinedIcon
                                color="info"
                                className="float-start icon_hover"
                                onClick={() =>
                                  emit("MOVE_UP", {
                                    doctor: doctorDetail.id,
                                    patientID: e.id,
                                  })
                                }
                              ></ArrowCircleUpOutlinedIcon>

                              <span className="mx-3">
                                {e.f_name} {e.l_name}{" "}
                              </span>

                              <DeleteForeverOutlinedIcon
                                variant="primary"
                                color="error"
                                className="float-end icon_hover"
                                onClick={() => {
                                  setModalPatientId(e.id);
                                  setModalDoctorId(doctorDetail.id);
                                  handleShow();
                                }}
                              ></DeleteForeverOutlinedIcon>

                              {/* !!!!!!!!!!ADD delete patient function here (patient id not correct) */}
                              {/* <Button 
                      className='buttonDanger'  
                      onClick={() => emit("DELETE", {doctor: doctorDetail.id,patientID:e.id}), handleClose}
                      >
                        Delete Patient
                      </Button> */}
                              <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                              >
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                  Confirm to delete patient, this cannot be
                                  undone
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                  >
                                    Close
                                  </Button>

                                  {/* !!!!!!!!!!ADD delete patient function here (patient id not correct) */}
                                  <Button
                                    className="buttonDanger"
                                    onClick={() => {
                                      emit("DELETE", {
                                        doctor: modalDoctorId,
                                        patientID: modalPatientId,
                                      });
                                      handleClose();
                                    }}
                                  >
                                    Delete Patient
                                  </Button>
                                </Modal.Footer>
                              </Modal>

                              {/* <DeleteForeverOutlinedIcon 
                        color = 'error'
                        className='float-end icon_hover'
                        onClick={() => emit("DELETE", {doctor: doctorDetail.id,patientID:e.id})}> </DeleteForeverOutlinedIcon> */}
                            </div>
                          );
                        })}
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

export default QueueComponent;
