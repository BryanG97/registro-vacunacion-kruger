import React from 'react';
import imginicio from '../assets/images/inicio.jpg';

class Inicio extends React.Component{
  //  
    render(){
        return(
      <div>
        <div id="navegador">
          <ul>
                <li><a href="/" style={{ textDecoration: 'none' ,color: 'white'}}>INICIO</a></li>                  
                <li><a href="/loginadmin" style={{ textDecoration: 'none' ,color: 'white'}}>LOGIN ADMINISTRADOR</a></li>                  
                <li><a href="/loginemple" style={{ textDecoration: 'none',color: 'white' }}>LOGIN EMPLEADO</a></li>
              </ul> 
            </div>

            <img src={imginicio} style={{backgroundSize: 'cover'}}backgroundAttachment="fixed"/>
        </div>
        );
    }
}

export default Inicio;