import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeContextProvider from "./context/ThemeContextProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // 👈 import at top
import CalendarPage from "./pages/Calendar"; // 👈 Add this
import SalesAnalytics from "./pages/SalesAnalytics";
import Tasks from "./pages/Tasks";

function AppRoutes() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      {/* Public routes */}
      {!isLoggedIn && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}

      {/* Protected routes */}
      {isLoggedIn ? (
        <>
          <Route
            path="/"
            element={
              <div className="flex">
                <Sidebar />
                <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
                  <Navbar />
                  <div className="p-4">
                    <Dashboard />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/analytics" element={<SalesAnalytics />} />
          <Route path="/tasks" element={<Tasks />} />
        </>
      ) : (
        // redirect all other routes to login if not logged in
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
