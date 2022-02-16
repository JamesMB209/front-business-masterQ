import { useSelector } from "react-redux";
import { Col, Row, Container } from 'react-bootstrap';

export default function PharmacyQueueComponent(patient) {

  /** Load inital stores */
  const drugInventory = useSelector((state) => state.pharmacyStore);
  // console.log(patient)

  return (
    <Container>
    <Row>
      <Col lg={3} md={12} className='pharmacy_card'>
 
      {/* <p>
        Patient: {patient.f_name} {patient.l_name}
      </p> */}
      {/* {patient.prescribedDrugs != undefined
      ?drugInventry.filter((drug) => patient.prescribedDrugs.includes(drug.sku.toString())).map((drug, index) => (
        <p key={`key-prescribed-drugs-${index}`}>{drug.drug}, dosage:{drug.dosage}, price:{drug.price}</p>
      ))
      :"No drugs required"} */}
      {patient === undefined ? "No patients in the queue" : 
      <h6>Patient Name: {patient.f_name} {patient.l_name}</h6>}
      
      {patient.prescribedDrugs === undefined
        ? "No drugs required"
        : drugInventory
            .filter((drug) =>
              patient.prescribedDrugs.includes(drug.sku.toString())
            )
            .map((drug, index) => (
              <p key={`key-prescribed-drugs-${index}`}>
                <br/>
                <span>{drug.drug} </span>
                dosage: <span>{drug.dosage}mg </span>
                {/* price:{drug.price} */}
              </p>
            ))}
   
    </Col>
    </Row>
    </Container>
  );
};