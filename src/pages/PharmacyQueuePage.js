import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { emit, NEXT } from "../redux/webSocets/actions";
import { Container, Col, Row, Button, Card, Accordion } from "react-bootstrap";

import { DataGrid } from '@mui/x-data-grid';
import PharmacyQueueComponent from "../component/PharmacyQueueComponent";

export default function PharmacyQueuePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** Load inital states */
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const businessObject = useSelector((state) => state.businessObjectStore);
  const drugInventory = useSelector((state) => state.pharmacyStore);

  /** Check logged in */
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);
console.log(businessObject)
  /** Buttons */
  const next = () => {
    emit(NEXT, { doctor: "pharmacy" });
  };

  const columns = [
    { field: 'drug', headerName: 'Drug name', width: 250 },
    { field: 'dosage', headerName: 'Dosage', width: 180 },
    { field: 'stock', headerName: 'Stock', width: 180 },
    { field: 'price', headerName: 'Price', width: 180 },
    { field: 'cost', headerName: 'Cost', width: 180 },
  ];
  
let rowsDrugs = drugInventory.map(row => {
  return {
    id:row.sku,
    ...row
  }
})

  //console.log(drugInventory)

  return (
    <>
    <Container>
    <div>
          <div className='search_header my-3'>
           <h3 >Pharmacy Queue</h3>
          </div>
      
      {/* {businessObject.pharmacy.queue.length === undefined */}
          <br />
      {businessObject.pharmacy === undefined
        ? "" : businessObject.pharmacy.queue.length === 0 
        ? "No patients waiting for drugs." 
        : businessObject.pharmacy.queue.slice(0, 3).map((patient, index) => (
          <div>
          <PharmacyQueueComponent key={`key-patient-${index}`} {...patient} /> </div>
        ))
      }
      <br />
      <Button 
      className='m-4 mb-5 buttonOne'
      onClick={next}>Next Patient</Button>
      


      {/* Inventory Table */}
      <Accordion 
      className='m-3 pharmacy_stock_card'
      defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5 className='setting_title my-2'>Pharmacy Inventory</h5>
            </Accordion.Header>
          <Accordion.Body>
          <div 
          className='inventory_table'
          style={{ height: 500, width: '100%' }}>
            <DataGrid
              rows={rowsDrugs}
              columns={columns}
              pageSize={7}
              rowsPerPageOptions={[7]}
            />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

{/* <Card className="pharmacy_stock_card ">
     
        <h5>Inventory Stock</h5>
     
<Card.Body>
    <div 
    className='inventory_table'
    style={{ height: 500, width: '90%' }}>
      <DataGrid
        rows={rowsDrugs}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
      />
      </div>
   </Card.Body>
  </Card> */}
    </div>
    </Container>
    </>
  );
};