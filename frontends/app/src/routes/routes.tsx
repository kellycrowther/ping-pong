import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import HomeContainer from "../containers/Home/HomeContainer";

const routes = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    isPrivate: false,
    component: <HomeContainer />,
  },
  {
    path: "/results",
    key: "results",
    exact: true,
    isPrivate: false,
    component: <div>Hello Results</div>,
  },
];

export function RenderRoutes() {
  return (
    <Switch>
      {routes.map((route, i) => {
        return route.isPrivate ? (
          <PrivateRoute
            component={route.component}
            key={route.key}
            path={route.path}
            exact={route.exact}
            isAuthenticated={true}
          />
        ) : (
          <Route key={route.key} path={route.path} exact={route.exact}>
            {route.component}
          </Route>
        );
      })}
    </Switch>
  );
}
