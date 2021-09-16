import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }from "react-router-dom";
import Inicio from '../Inicio';
import DarAlta from './DarAlta';
import RegistrarEmpl from './RegistrarEmpl';

const MenuAdministrador=()=>{
    return(
        <Router>
            <div>
                <div id="navegador2">
                    <ul>
                        <li><Link to="/" style={{ textDecoration: 'none' ,color: 'white'}}>INICIO</Link></li> 
                        <li><Link to="/registrarempl" style={{ textDecoration: 'none' ,color: 'white'}}>ADMINISTRAR EMPLEADO</Link></li>
                        <li><Link to="/daralta" style={{ textDecoration: 'none' ,color: 'white'}}>DAR ALTA EMPLEADO</Link></li>
                    
                    </ul> 
                </div>
                <Switch>
                    
                    <Route exact path="/registrarempl">
                        <RegistrarEmpl/>
                    </Route>
                    <Route exact path="/daralta">
                        <DarAlta/>
                    </Route>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default MenuAdministrador;
