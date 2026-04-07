import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function ProtectedRoute({ children, adminOnly = false }) {
  const { currentUser, loading } = useContext(UserContext);

  // 🔥 WAIT until auth state is restored
  if (loading) return <div>Loading...</div>;

  // 🔥 NOT LOGGED IN
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // 🔥 ADMIN CHECK
  if (adminOnly && currentUser.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

export default ProtectedRoute;