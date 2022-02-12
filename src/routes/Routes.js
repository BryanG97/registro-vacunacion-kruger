import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import LoginAdmin from "../components/administrador/LoginAdmin";
import MenuAdmin from "../components/administrador/MenuAdmin";
import LoginEmpl from "../components/empleado/LoginEmpl";
import MenuEmpl from "../components/empleado/MenuEmpl";
import Inicio from "../components/Inicio";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/loginadmin" component={LoginAdmin}/>
                <Route exact path="/loginemple" component={LoginEmpl}/>
                <Route exact path="/menuadmin" component={MenuAdmin}/>  
                <Route exact path="/menuemple" component={MenuEmpl}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;