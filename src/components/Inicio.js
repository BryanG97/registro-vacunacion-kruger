import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }from "react-router-dom";
//Importar componentes
import MenuAdministrador from '../components/administrador/MenuAdmin';
import LoginEmpleado from '../components/empleado/LoginEmpl';

class Inicio extends React.Component{
    render(){
        return(
      <div>
        <div id="navegador">
          <ul>
                <li><a href="/" style={{ textDecoration: 'none' ,color: 'white'}}>INICIO</a></li>                  
                <li><a href="/menuadmin" style={{ textDecoration: 'none' ,color: 'white'}}>MENÚ ADMINISTRADOR</a></li>                  
                <li><a href="/loginemple" style={{ textDecoration: 'none',color: 'white' }}>LOGIN EMPLEADO</a></li>
              </ul> 
            </div>
        </div>
        );
    }
}

export default Inicio;