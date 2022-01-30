import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { getApiThunk } from "../redux/api/actions";

const ENDPOINT = process.env.REACT_APP_API_SERVER;

export default function LoginPage() {
  const apiFromRedux = useSelector((state) => state.apiStore.que);
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [hkid, setHkid] = useState("");
  const [temperature, setTemperature] = useState("");
  const [visitReason, setVisitReason] = useState("err");
  const [history, setHistory] = useState("hist");
  const [q, setQ] = useState(3);
  // const socket = io(ENDPOINT, { transports: ["websocket"] });
  const [number, setNumber] = useState(0);

  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return (
    <div>
      <p>Hello, its {fullname}</p>
      <p>{gender}</p>
      <p>{dob}</p>
      <p>{hkid}</p>
      <p>{temperature}</p>
      <p>{visitReason}</p>
      <p>{history}</p>
      <p>{q} in queue</p>
      {/* <button onClick={nextPatient}>Next</button> */}
      {/* <button onClick={getApiThunk}></button> */}
    </div>
  );
}
