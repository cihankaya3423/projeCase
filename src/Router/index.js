import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "../Shared/partnerComponents/loading/loading";
import { RouterPublic } from "./routerComponents";

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={RouterPublic} />
      </Switch>
    </Suspense>
  );
};

export default Router;
