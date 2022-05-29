import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/register/SignUpPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
