import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/register/SignUpPage";
import authController from "./services/api/auth.controller";
import jwt_decode from "jwt-decode";

function App() {
  const isAuth = useSelector((state) => state.authReducer.authenticated);
  const token = useSelector((state) => state.authReducer.token.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const decoded = jwt_decode(token);
      console.log(decoded);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        dispatch({
          type: "SIGNOUT_SUCCESS",
        });
        window.location.href = "/login";
      }
    })();
  }, []);

  return (
    <>
      <Router>
        {isAuth ? (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Redirect to="/login" />
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
