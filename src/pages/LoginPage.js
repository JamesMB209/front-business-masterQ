import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "../component/LoginComponent";

export default function LoginPage() {
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === true) {
      navigate("/doctor");
    }
  }, [auth, navigate]);

  return (
    <div>
      <Login />
    </div>
  );
}
