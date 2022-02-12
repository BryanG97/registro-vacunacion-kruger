import React,{Component} from 'react';
import axios from 'axios';

export default class TipoVacTab extends Component{
     //PARA ALMACENAR LOS EMPLEADOS
     state = {
        empleados: []
        ,status: false
    }

    //PARA LEER LOS EMPLEADOS SEGUN TIPO DE VACUNA
    leerTipoVacuna = (e) => {
        console.log(e.target.value);
        var baseUrl="http://localhost:5000/empleados";
        axios.get(baseUrl, {params:{
            tipovacuna: e.target.value
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
                <h1>TIPO DE VACUNA</h1>
                <br/>

                <select name="tipovacuna" onChange={this.leerTipoVacuna} id="tvacuna">
                        <option >- SELECCIONE TIPO -</option>
                        <option value="SPUTNIK">Sputnik</option>
                        <option value="ASTRAZENECA" >AstraZeneca</option>
                        <option value="PFIZER">Pfizer</option>
                        <option value="JHONSON&JHONSON">Jhonson & Jhonson</option>
                        </select>

                <div>
                <h2>DETALLES</h2>
                <table>
                    <thead>
                        <tr><th>CÉDULA</th><th>NOMBRES</th><th>APELLIDOS</th><th>TIPO DE VACUNA</th><th>NUMERO DE DOSIS</th></tr>
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
                                        <td>{emp.tipovacuna}</td>
                                        <td>{emp.numerodosis}</td>

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

