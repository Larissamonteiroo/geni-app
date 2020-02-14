import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from './view/home/Home'
import Sobre from "./view/sobre/index";
import Contato from "./view/contato/index";


export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Index}/>
      <Route exact path='/sobre' component={Sobre}/>
      <Route exact path='/contato' component={Contato}/>
    </Switch>
  )
}

