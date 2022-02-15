import { useSelector } from "react-redux";

export default function PharmacyQueueComponent(patient) {

  /** Load inital stores */
  const drugInventry = useSelector((state) => state.pharmacyStore);
  // console.log(patient)

  return (
    <div className="row">
      {/* <p>
        Patient: {patient.f_name} {patient.l_name}
      </p> */}
      {/* {patient.prescribedDrugs != undefined
      ?drugInventry.filter((drug) => patient.prescribedDrugs.includes(drug.sku.toString())).map((drug, index) => (
        <p key={`key-prescribed-drugs-${index}`}>{drug.drug}, dosage:{drug.dosage}, price:{drug.price}</p>
      ))
      :"No drugs required"} */}
      {patient === undefined ? "No patients in the queue" : <h6>{patient.f_name} {patient.l_name}</h6>}
      {patient.prescribedDrugs === undefined
        ? "No drugs required"
        : drugInventry
            .filter((drug) =>
              patient.prescribedDrugs.includes(drug.sku.toString())
            )
            .map((drug, index) => (
              <p key={`key-prescribed-drugs-${index}`}>
                {drug.drug}, dosage:{drug.dosage}, price:{drug.price}
              </p>
            ))}
    </div>
  );
};