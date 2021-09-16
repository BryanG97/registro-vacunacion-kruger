import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import MenuAdministrador from "../components/administrador/MenuAdmin";
import LoginEmpl from "../components/empleado/LoginEmpl";
import MenuEmpl from "../components/empleado/MenuEmpl";
import Inicio from "../components/Inicio";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/menuadmin" component={MenuAdministrador}/>
                <Route exact path="/loginemple" component={LoginEmpl}/>
                <Route exact path="/menuemple" component={MenuEmpl}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;