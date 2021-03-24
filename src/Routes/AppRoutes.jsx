import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ActorDetails from "../components/ActorDetails";
import Home from "../components/Home";
import MovieDetails from "../components/MovieDetails";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie-details/:id" component={MovieDetails} />
        <Route path="/actor-details/:id" component={ActorDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
