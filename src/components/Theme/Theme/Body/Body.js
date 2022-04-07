import React from "react";
import Delegator from "./delegator/delegator";
import Moonbeam from "./moonbeam/moonbeam";
import Individual from "./individual/individual";
import { Route, Switch, Redirect } from "react-router-dom";
import DataCheack from "./individual/DataCheack";

const Body = () => {
  return (
    <Switch>
      <Route path="/" exact component={Delegator} />
      <Route path="/moonbeam" exact component={Moonbeam} />
      <Route path="/moonbeam/:id" exact component={Individual} />
      <Route path="/data" component={DataCheack} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Body;
