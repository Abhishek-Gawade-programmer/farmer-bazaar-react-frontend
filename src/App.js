import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./authpages/HomePage";
import LoginPage from "./authpages/LoginPage";
import Header from "./components/Header";
import PasswordReset from "./authpages/PasswordReset";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <PrivateRoute component={HomePage} path="/" exact />
          <Route component={LoginPage} path="/login" />
          <Route component={PasswordReset} path="/password-reset" />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
