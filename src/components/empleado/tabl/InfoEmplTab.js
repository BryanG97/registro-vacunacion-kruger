import React from 'react';
import axios from 'axios';
import Cookies from "universal-cookie/es6";

//URL DE LA API
const baseUrl="http://localhost:5000/empleados";
const cookies= new Cookies();

class InfoEmplTab extends React.Component{
    cedula="";
    nombres="";
    apellidos="";
    correo="";
    
    fecha="";
    direccion="";
    telefono="";
    estvacuna="";
    tipovacuna=""; 
    fechavacuna="";
    numerodosis="";

    componentDidMount(){
        axios.get(baseUrl,{params:{
            id : cookies.get('id')
        }}).then(response=>{
            return response.data;
        }).then(response=>{
            if(response.length > 0){
                var respuesta=response[0];

                this.cedula=respuesta.cedula;
                this.nombres=respuesta.nombres;
                this.apellidos=respuesta.apellidos;
                this.correo=respuesta.correo;
                this.fecha=respuesta.fecha;
                this.direccion=respuesta.direccion;
                this.telefono=respuesta.telefono;
                this.estvacuna=respuesta.estvacuna;
                this.tipovacuna=respuesta.tipovacuna;
                this.fechavacuna=respuesta.fechavacuna;
                this.numerodosis=respuesta.numerodosis;
            }else{

            }
        }).catch(error=>{
            console.log(error);
        });
    }



    render(){
        return(
        <div>
            <h2>DETALLES</h2>
            <table>
                
                    <tr><th>CÉDULA</th> <td>{this.cedula}</td></tr>
                    <tr><th>NOMBRES</th> <td>{this.nombres}</td></tr>
                    <tr><th>APELLIDOS</th> <td>{this.apellidos}</td></tr>
                    <tr> <th>CORREO</th> <td>{this.correo}</td></tr>

                    <tr><th>FECHA NACIMIENTO</th> <td>{this.fecha}</td></tr>
                    <tr><th>DIRECCIÓN</th> <td>{this.direccion}</td></tr>
                    <tr><th>TELÉFONO</th> <td>{this.telefono}</td></tr>
                    <tr><th>ESTADO DE VACUNACIÓN</th> <td>{this.estvacuna}</td></tr>
                    <tr><th>TIPO VACUNA</th> <td>{this.tipovacuna}</td></tr>
                    <tr><th>FECHA VACUNA</th> <td>{this.fechavacuna}</td></tr>
                    <tr><th>NÚMERO DOSIS</th> <td>{this.numerodosis}</td></tr>
                                            
            </table>
        </div>
        );
    }
}
export default InfoEmplTab;