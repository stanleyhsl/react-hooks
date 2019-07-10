import * as React from "react";
import { Switch, RouteProps, Route } from "react-router-dom";
import Loading from "../components/loading";

const { lazy, Suspense } = React;

// 注意，这里的lazyComponets,可以与其它组件相同，也可以不同；
// 每个webpackChunkName生成一个js
const Home = lazy(() =>
  import(/* webpackChunkName:"lazyComponets" */ "../components/home")
);
const Life = lazy(() =>
  import(/* webpackChunkName:"life" */ "../components/life")
);
const Banner = lazy(() =>
  import(/* webpackChunkName:"banner" */ "../components/banner")
);

const routes: RouteProps[] = [
  {
    path: "/life",
    exact: true,
    component: Life
  },
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/banner",
    exact: true,
    component: Banner
  }
];
const MyRoute = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map(({ path, exact, component:Com }) => (
        <Route
          key={path+""}
          exact={exact}
          path={path}
          render={() => <Com />}
        />
      ))}
    </Switch>
  </Suspense>
);

export default MyRoute;