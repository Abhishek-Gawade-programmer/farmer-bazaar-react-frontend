import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./authpages/HomePage";
import LoginPage from "./authpages/LoginPage";
import RegisterPage from "./authpages/RegisterPage";
import VerificationCodePage from "./authpages/VerificationCodePage";
import UserProfile from "./authpages/UserProfile";
import Header from "./components/Header";
import PasswordReset from "./authpages/PasswordReset";

function App() {
  return (
    <div className="App">
      {/* <pre>fghfghfg{process.env.NODE_ENV}</pre> */}
      <Router>
        <AuthProvider>
          <Header />
          <PrivateRoute component={HomePage} path="/" exact />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={PasswordReset} path="/password-reset" />
          <Route component={VerificationCodePage} path="/verification-user" />
          <PrivateRoute component={UserProfile} path="/my-profile" exact />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
