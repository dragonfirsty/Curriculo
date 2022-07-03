import { Route, Switch } from "react-router-dom";
import About from "../pages/about";
import Certificates from "../pages/certificates";
import Tecnologys from "../pages/tecnologys";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/projects"}>
      <Tecnologys/>
      </Route>
      <Route exact path={"/certificates"}>
        <Certificates/>
      </Route>
      <Route exact path={"/"}>
        <About/>
      </Route>
    </Switch>
  );
};

export default Routes