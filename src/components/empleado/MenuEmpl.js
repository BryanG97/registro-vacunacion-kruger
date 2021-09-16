import React,{Component} from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }from "react-router-dom";
import Cookies from "universal-cookie/es6";
import ActualizarInfo from "./ActualizarInfo";

const cookies= new Cookies();

class MenuEmpl extends Component{

    //METODO DE CERRAR SESION

    cerrarSesion=()=>{
        cookies.remove('id',{path:"/loginemple"});
        cookies.remove('nombres',{path:"/loginemple"});
        cookies.remove('apellidos',{path:"/loginemple"});
        cookies.remove('usuario',{path:"/loginemple"});
        window.location.href='./loginemple';
    }

    render(){
        console.log(cookies.get('id'));
        console.log(cookies.get('nombres'));
        console.log(cookies.get('apellidos'));
        console.log(cookies.get('usuario'));

        return(
            <Router>
            <div>
               <div id="navegador">
                    <ul >
                        <li style={{color:'white'}}>Bienvenido {cookies.get('nombres')} {cookies.get('apellidos')}</li>
                        <li><Link to="/actualizarinfo" style={{ textDecoration: 'none' ,color: 'white'}}>ACTUALIZAR INFORMACIÓN</Link></li>
                        <li ><button align="rigth" onClick={()=>this.cerrarSesion()} style={{background:'transparent',
                         border:'transparent', color:'white'}}>CERRAR SESION</button></li>
                    </ul>
                        
                </div>

                <Switch>
                    
                    <Route exact path="/actualizarinfo">
                        <ActualizarInfo/>
                    </Route>
                </Switch>
               
            </div>
            </Router>
        );
    }
}

export default MenuEmpl;