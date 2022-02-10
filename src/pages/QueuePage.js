import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import QueueComponent from "../component/QueueComponent";
import { Container, Row, Col, Card } from "react-bootstrap";
import SearchBar from "../component/SearchComponent";

const Queue = () => {
  // const dispatch = useDispatch();
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
    <div className='search_header'>
      <h3 className='' >Queue Management</h3>
    </div>
  
     <QueueComponent />
     </Container>
     </>
  );
};

export default Queue;
