import Signup from "../signup/signup";
import SignIn from "../SignIn/SignIn";
import {Switch, Route} from "react-router-dom"


const Router = () => {
  return (
    <div className="router">
      <Switch>
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  );
};

export default Router;
