import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, LinkCreate } from "./routerComponents";
import Loading from "../Shared/partnerComponents/loading/loading";

const RouterPublic = ({ match }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={`${match.url}`} exact component={Home} />
        <Route path={`${match.url}linkCreate`} component={LinkCreate} />
      </Switch>
    </Suspense>
  );
};

export default RouterPublic;
