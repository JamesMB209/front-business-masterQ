import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BillboardComponent from "../component/BillboardComponent";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";

const Billboard = () => {
  let token = localStorage.getItem("token");
  let currentBusinessId = localStorage.getItem("businessId");
  const apiStore = useSelector((state) => state.apiStore);
  const stores = useSelector((state) => state);
  const businessObjectStore = useSelector((state) => state.businessObjectStore);
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(loadBusinessObjThunk(currentBusinessId))
  }, [loadBusinessObjThunk])
//  businessObjectStore.map((object) => object.f_name)
  const [bisObj, setBisObj] = useState(null);
  delete businessObjectStore.data
//   businessObjectStore.shift()
  console.log(stores);
  console.log(apiStore);
console.log(businessObjectStore)
  return (
    <>
      {/* {businessObjectStore ? businessObjectStore.map((object) => (
          object.f_name)): "ruh rou"} */}
          <div><h2>{businessObjectStore[1].fullName} </h2>{businessObjectStore[1].queue.map((eachP) => <p>{eachP.f_name} {eachP.l_name}</p>)}</div>
          <div><h2>{businessObjectStore[2].fullName} </h2>{businessObjectStore[2].queue.map((eachP) => <p>{eachP.f_name} {eachP.l_name}</p>)}</div>
          <div><h2>{businessObjectStore[3].fullName} </h2>{businessObjectStore[3].queue.map((eachP) => <p>{eachP.f_name} {eachP.l_name}</p>)}</div>
    </>
  );
};

export default Billboard;