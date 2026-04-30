import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const storage = localStorage.getItem("token");

  if (!storage) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default PrivateRoute;
