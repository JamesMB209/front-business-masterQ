import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PharmacyQueueComponent from "../component/PharmacyQueueComponent";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";
import { useNavigate } from "react-router-dom";
import { pharmacyReducer } from "../redux/pharmacyStock/reducers";
import { emit, NEXT } from "../redux/webSocets/actions";

const PharmacyQueuePage = () => {
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const businessObject = useSelector((state) => state.businessObjectStore);
  const drugInventry = useSelector((state) => state.pharmacyStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);

  const clickPharmacy = () => {
    emit(NEXT, { doctor: "pharmacy" });
  };

  return (
    <div className="col">
      <div className="row">
        Inventry Stock
        {drugInventry.map((drug, index) => (
        <p key={`key-drug-inventry-${index}`}>{drug.drug}, dosage:{drug.dosage}, price:{drug.price} In stock = {drug.stock}</p>
      ))}
      </div>
      {businessObject.pharmacy.queue =! undefined
        ? businessObject.pharmacy.queue.slice(0, 3).map((patient, index) => (
          <PharmacyQueueComponent key={`key-patient-${index}`} {...patient} />
        ))
        : "Nobody waiting."
      }

      <button onClick={clickPharmacy}>Next</button>
    </div>
  );
};

export default PharmacyQueuePage;
