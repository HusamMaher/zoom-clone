import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Axios from "axios";
import "./style.css";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Services from "./pages/Services";
import SignUp from "./pages/Signup";
import UserContext from "./context/userContext";
import Signin from "./pages/Signin";
import Room from "./pages/Room";
import Coding from "./pages/Coding";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:4001/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:4001/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route path="/coding" exact component={Coding} />

            <div>
              <Navbar />

              <Route path="/" exact component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={Signin} />
              <Route path="/room" component={Room} />
            </div>
            <Redirect to="/signup" />
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
