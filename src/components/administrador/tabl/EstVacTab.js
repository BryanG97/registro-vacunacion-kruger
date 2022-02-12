import React,{Component} from 'react';
import axios from 'axios';

//const EstVacTab = ()=>{

export default class EstVacTab extends Component{
    

    //PARA ALMACENAR LOS EMPLEADOS
    state = {
        empleados: []
        ,status: false
    }
    
    //PARA LEER LOS EMPLEADOS SEGUN ESTADO DE VACUNA
    leerEstadoVacuna = (e) => {
        console.log(e.target.value);
        var baseUrl="http://localhost:5000/empleados";
        axios.get(baseUrl, {params:{
            estvacuna: e.target.value
        }}).then(res => {
            this.setState({
                empleados: res.data,
                status: true
            });
        });
    };
    

    render(){
        
        return(
            <div>
                <h1>ESTADO DE VACUNACIÓN</h1>
                <br/>

                <select name="estadovacuna" onChange={this.leerEstadoVacuna} id="evacuna">
                        <option >- SELECCIONE ESTADO-</option>
                        <option value="VACUNADO">VACUNADO</option>
                        <option value="NO VACUNADO" >NO VACUNADO</option>
                        </select>

                <div>
                <h2>DETALLES</h2>
                <table>
                    <thead>
                        <tr><th>CÉDULA</th><th>NOMBRES</th><th>APELLIDOS</th><th>ESTADO DE VACUNACIÓN</th></tr>
                    </thead> 

                    <tbody>
                    {
                        this.state.status === true &&  (
                            this.state.empleados.map((emp, i) =>{
                                return(
                                    <tr key={i}>

                                        <td>{emp.cedula}</td>
                                        <td>{emp.nombres}</td>
                                        <td>{emp.apellidos}</td>
                                        <td>{emp.estvacuna}</td>

                                    </tr>
                                );
                            })
                        ) 
                    }
                    </tbody>                           
                </table>
            </div>

            </div>
        );
    }
}
