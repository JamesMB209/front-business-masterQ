import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "../component/Login";

export default function LoginPage() {
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === true) {
      navigate("/extra");
    }
  }, [auth, navigate]);

  return (
      <div>
          <Login />
      </div>
  )
}
