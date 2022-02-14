import { useSelector } from "react-redux";

export default function PharmacyQueueComponent(patient) {

  /** Load inital stores */
  const drugInventry = useSelector((state) => state.pharmacyStore);

  return (
    <div className="row">
      <p>{patient.f_name} {patient.l_name}</p>
      {patient.prescribedDrugs != undefined
      ?drugInventry.filter((drug) => patient.prescribedDrugs.includes(drug.sku.toString())).map((drug) => (
        <p>{drug.drug}, dosage:{drug.dosage}, price:{drug.price}</p>
      ))
      :"No drugs required"}
    </div>
  );
};