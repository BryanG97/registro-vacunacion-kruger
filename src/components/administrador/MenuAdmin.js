import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }from "react-router-dom";
import DarAlta from './DarAlta';
import RegistrarEmpl from './RegistrarEmpl';
import Cookies from "universal-cookie/es6";
import ListarEmpl from './ListarEmpl';


const cookies= new Cookies();

//const MenuAdministrador=()=>{

class MenuAdmin extends React.Component{
        //METODO DE CERRAR SESION
        cerrarSesion=()=>{
            cookies.remove('id',{path:"/loginemple"});
            cookies.remove('nombres',{path:"/loginemple"});
            cookies.remove('apellidos',{path:"/loginemple"});
            cookies.remove('usuario',{path:"/loginemple"});
            window.location.href='./loginadmin';
        }

    render(){    

        return(
            <Router>
                <div>
                    <div id="navegador2">
                        <ul>
                            <li style={{color:'white'}}>Bienvenido {cookies.get('usuario')}</li>
                            <li><Link to="/menuadmin" style={{ textDecoration: 'none' ,color: 'white'}}>INICIO</Link></li> 
                            <li><Link to="/registrarempl" style={{ textDecoration: 'none' ,color: 'white'}}>ADMINISTRAR EMPLEADO</Link></li>
                            <li><Link to="/daralta" style={{ textDecoration: 'none' ,color: 'white'}}>DAR ALTA EMPLEADO</Link></li>
                            <li><Link to="/listarempl" style={{ textDecoration: 'none' ,color: 'white'}}>FILTRAR EMPLEADOS</Link></li>
                            <li ><button align="rigth" onClick={()=>this.cerrarSesion()} style={{background:'transparent',
                            border:'transparent', color:'white'}}>CERRAR SESION</button></li>
                        
                        </ul> 
                    </div>
                    

                    

                    <Switch>
                        
                        <Route exact path="/registrarempl">
                            <RegistrarEmpl/>
                        </Route>

                        <Route exact path="/daralta">
                            <DarAlta/>
                        </Route>

                        <Route exact path="/listarempl">
                            <ListarEmpl/>
                        </Route>

                    </Switch>
                </div>
            </Router>
            
        );
    }
}
export default MenuAdmin;
