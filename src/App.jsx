import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddCertification from "./pages/AddCertification";
import Profile from "./pages/Profile";
import PublicProfile from "./pages/PublicProfile";
import Directory from "./pages/Directory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import Feed from "./pages/Feed";
import VerifyCertificate from "./pages/VerifyCertificate";

function App() {
  const { loading } = useContext(UserContext); // 🔥 only loading needed here

  // 🔥 OPTIONAL: Global loading screen
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Navbar />

      <div className="pt-20">
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:userId" element={<PublicProfile />} />

          {/* PROTECTED */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-certification"
            element={
              <ProtectedRoute>
                <AddCertification />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/directory"
            element={
              <ProtectedRoute>
                <Directory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />

          <Route
            path="/verify/:certificateId"
            element={
              <ProtectedRoute>
                <VerifyCertificate />
              </ProtectedRoute>
            }
          />

          {/* 🔥 ADMIN ONLY */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;