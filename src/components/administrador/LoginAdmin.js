import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';



//URL DE LA API PARTE ADMINISTRADOR
const baseUrl="http://localhost:5000/administradores";

const cookies = new Cookies(); 

class LoginAdmin extends React.Component{

    //Capturar Inputs
    state={
        form:{
            usuario:'',
            contra:''
        }
    }
    //Guardar Valor de estado de acuerdo a su nombre
    handleChange =async e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        console.log(this.state.form);
    }

    //METODO PARA INICAR PETICION HTTP E INICIO DE SESION

    iniciarSesion= async()=>{
        await axios.get(baseUrl,{params:{
            usuario:this.state.form.usuario, 
            contra:this.state.form.contra}})
            .then(response=>{
                console.log(response.data);//Para verificar si envia los datos en consola
                return response.data;
            }).then(response=>{
                if(response.length > 0){

                    //GUARDO VALORES EN LAS COOKIES
                    var respuesta=response[0];
                    cookies.set('usuario', respuesta.usuario,{path: "/"});
                    

                    alert(`Bienvenido ${respuesta.usuario}`);
                    window.location.href="./menuadmin";
                    
                }else{
                    alert(`Usuario o Contraseña Incorrectos`);
                }
            })
            .catch(error=>{
                console.log(error);
            });
    }

    render(){
        return(
            <div id="navegador">
          <ul>
                <li><a href="/" style={{ textDecoration: 'none' ,color: 'white'}}>INICIO</a></li>                  
                {/* <li><a href="/menuadmin" style={{ textDecoration: 'none' ,color: 'white'}}>MENÚ ADMINISTRADOR</a></li>     */}
                <li><a href="/loginadmin" style={{ textDecoration: 'none' ,color: 'white'}}>LOGIN ADMINISTRADOR</a></li>                  
                <li><a href="/loginemple" style={{ textDecoration: 'none',color: 'white' }}>LOGIN EMPLEADO</a></li>
              </ul> 
            
                <br/>
                <br/>
                <br/>
                <br/>
            <h2 align="center">INICIAR SESIÓN ADMINISTRADOR</h2>
            <br/>
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        
                            <label>Usuario:</label>
                            <br/>
                            <input type="text" name="usuario" className="form-control" 
                            style={{width: '100%'}} onChange={this.handleChange} autocomplete="off"/>
                            <br/>
                            <label>Contraseña:</label>
                            <br/>
                            <input type="password" name="contra" className="form-control" 
                            style={{width: '100%'}} onChange={this.handleChange}/>
                            <br/>
                            <button type="submit" className="btn btn-primary" onClick={()=>this.iniciarSesion()} >Iniciar Sesión</button>
                        
                    </div>

                </div>

            </div>
            
            </div>
        );
    }
}

export default LoginAdmin;