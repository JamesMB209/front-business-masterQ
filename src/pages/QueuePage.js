import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QueueComponent from "../component/QueueComponent";
import { Container } from "react-bootstrap";

const Queue = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);
  return (
    <>
      <Container fluid>
        <div className="search_header my-5">
          <h3 className="">Queue Management</h3>
        </div>

        <QueueComponent />
      </Container>
    </>
  );
};

export default Queue;
