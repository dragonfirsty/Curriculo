import { Route, Switch } from "react-router-dom";
import About from "../pages/about";
import Certificates from "../pages/certificates";
import Tecnologys from "../pages/tecnologys";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/projects"}>
      <Tecnologys/>
      </Route>
      <Route exact path={"/certificates"}>
        <Certificates/>
      </Route>
      <Route exact path={"/about"}>
        <About/>
      </Route>
      <Route exact path={"/"}>
        <Home/>
      </Route>
    </Switch>
  );
};

export default Routes