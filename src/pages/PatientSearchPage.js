import React, { useEffect } from "react";
import SearchBar from "../component/SearchComponent";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";

import CollapsibleTable from '../component/searchTest'

const PatientSearch = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const searchingStore = useSelector((state) => state.searchStore.data);
  
  // console.log(searchingStore);
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return (
    <div>
      {/* <SearchBar searchingStore={searchingStore}/> */}
      <CollapsibleTable />
    </div>
  );
};

export default PatientSearch;
